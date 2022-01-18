/*
    Merging Arrays

    1)  To implement Merge sort, first a function must be implemented that would be responsible for merging 2 sorted arrays

    2)  If the 2 given arrays are sorted, the helper function should create a new sorted array, consisting of all the elements from the 2 input arrays
            =>  What if they are not the same size?
    
    3)  The functions' space and time complexity should be O(n+m) and should not modify the params passed to it
            =>  "n" & "m" represent the 2 inputs to our function (the 2 arrays), n and m are the sizes of these inputs
            =>  This means that if n grows super large, but m doesn't, it should be O(n+m)
            =>  often in merge sort, n and m are the same size, or one slight difference
            =>  This translates to, we should visit each item in the array one time, iterating over each item in each array, once

    
                        ___________________________________________________
                                            PSEUDO-CODE
                        ___________________________________________________

                    i-  Create an empty array then start with the smallest values of each input array
                        => have 2 counters, "i" and "j" for e.g both starting at zero
                        => While loops recommended for this
                    
                    ii- While there are still values to look at (i and j haven't hit the end of their respective arrays):
                        => If the value in first arr is smaller than that of second arr, push value in first arr into our results, then move on to the next value in the first arr
                        => If the value in first arr is larger than the value in the second arr, push the value in the second arr into our results and move on to the next value in the second arr
                        => Once we exhaust one arr, push in all remaining values from the other arr 
    

    Building a merging function to understand Merge Sort, assuming the arrays are sorted, only returning the combination of those 2 sorted arrays below

    
*/

// Defining the function
function merge(arr1, arr2) {
  let results = [];

  // pointers:
  let i = 0;
  let j = 0;

  //   while loop while i and j are less than len of arr ( as long as there is data for us to look at )
  while (i < arr1.length && j < arr2.length) {
    //   pushing the min to sort while merging arrays
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      //   remember to move i by one in this case
      i++;
    } else {
      //   if they are the same value for instance
      results.push(arr2[j]);
      j++;
    }
  }

  //   Once one of the arr input length is fully traversed (exhausted => the previous while loop for i < arr1.length and j < arr2.length
  //   Once that is done, we take what's left in the longer array and add it in

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

/*
    Now that the Merge function is implemented, its time to take care of the sorting part of Merge sort

    =>  Implements recursion

    1)  We have our merge function that takes 2 sorted arrays, the goal is to keep breaking a single array in halves

    2)  We can use slice to accomplish that

    3)  Call merge sort again recursively on each half to keep breaking them into halves

    4)  The base case here is when the lengths of the arrays is less than or equal to one (1 or 0)

    5)  Once we have those small arrays, we merge them back using the merge function written up, until we are back at the full length of the array

    6)  Once array has been merged back together, we return the merged array at the end


*/

// Defining the mergeSort function that takes in a single array

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Recursive case
  // defining mid-point
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 72, 1, 9]));

/*
    Big O of merge sort

    =>  Time Complexity: best, worst and average: O(n log n)

    =>  Space Complexity: O(n)
*/
