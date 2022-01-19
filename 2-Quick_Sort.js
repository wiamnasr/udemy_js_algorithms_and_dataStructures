/*
    Quick Sort

    =>  Efficient and works well

    =>  Similar to merge sort, we keep splitting up the array and exploits the fact that arrays of 0 and 1 elements are always sorted

    =>  Works by selecting a single element (pivot point), then move all numbers that are lower than that number to the left of that number, and all numbers greater than the pivot number to the right

    =>  This finds the index where the pivot should end up in the sorted array

    =>  This process is repeated for the left and right sides

        ---->   Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot




    1)  Pivot Helper Function

        Creating a function responsible for arranging elements in an array on either side of a pivot

            --> Given an array the pivot helper function should designate an element as the pivot point

            --> All values that are less than the pivot are moved to the left and all values greater than the pivot are moved to the right

            --> The pivot helper function should do this in place, without creating a new array

            --> When complete, the pivot helper function should return the index of the pivot

        
        =>  Picking a pivot is an important decision, as the runtime of the quick-sort can change depending on where you pick the pivot from

            --> Ideally the pivot should be the median value in a dataset
            --> This is not easy to do if we don't know what the data itself is or what's the order
            --> Here we are picking the first element as a strategy for simplicity sake
            --> This however has consequences in terms of big O


                    ___________________________
                            PSEUDO-CODE
                    ___________________________

                >   Write a function called 'pivot' or 'partition' that accepts 3 args
                        i. An Array
                        ii. A Start Index (default to zero)
                        iii. End Index (default to (arr.length + 1))

                >   Grab the pivot from the start of the array for simplicity sake

                >   Store the current pivot index in a variable -> to keep track of where we re going to swap that pivot to at the very end

                >   Loop through the array from start to end:
                        i. If pivot is greater than the element we are looking at, increment the current pivot index variable and then swap the current element with the element at the pivot index
                
                >   Swap the starting element (the pivot) with the pivot index

                >   Return the pivot index

                

*/

//  Defining Pivot Helper function
function pivot(arr, start = 0, end = arr.length + 1) {
  // defining a basic swap function to use
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      // this tells us there is at least one thing that is less than our pivot
      swapIdx++;

      // swap array[i] with array[swapIdx]
      swap(arr, swapIdx, i);
      // console.log(arr);
    }
  }
  //   Swapping the starting element with the pivot index
  swap(arr, start, swapIdx); //  We are not swapping the pivot because pivot is the value, start is the index of that pivot

  // console.log(arr);
  //   returning the swap index
  return swapIdx;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

/*
      _________________________________________________________________________________________


  The above needs to be implemented again and again on both sides, until we hit the one item arrays#

  This will be accomplished with the quick sort implementation below

  2)  Quicksort implementation

                -----------------------------
                        PSEUDO-CODE
                -----------------------------

          =>  With the pivot helper function finished
          
          =>  We pass in an array, the helper function will take the first item and figure out where it should go

          =>  After putting all the items to left and right, the helper function returns an index

          =>  In out quicksort function, once finding out the index of the first pivot point

          =>  We will recursively call the same function again on the left and right sides of the pivot point, once its moved to the returned index

          =>  We will call the function on both sides not including the pivot, as its in place

          =>  We are not making new arrays -> this is happening in place

          =>  The base case is hence not to simply check if the array has one item in it

          =>  The base case is to check if the sub-array has one item in it

*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  // We want to keep running the recursive code, if left < right
  // As soon as they are equal, it means we are looking at one element -> remember, left and right are just pointers inside the full array
  if (left < right) {
    // Calling pivot with the arr. The very first time through, we want to call pivot() on the whole array
    // but then the recursive function will call it again many times on different sub-arrays with different start and end point
    let pivotIndex = pivot(arr, left, right);

    // Left side:
    // the right side here (where we are going to stop), make sure to not include the pivot index
    quickSort(arr, left, pivotIndex - 1);

    // Right side:
    // the left side here (where we are going to start), make sure to not include the pivot index
    quickSort(arr, pivotIndex + 1, right);
  }
  //  Return the array at the very end
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

/*
          _____________________________________________________________________________________________

          Big O of Quick sort

          =>  Time Complexity:
                - Best & Average Time complexity: O(n log n)
                - Worst Time Complexity: O(n^2)

          =>  Space Complexity: O(log n)
*/
