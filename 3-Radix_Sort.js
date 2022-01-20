/*
    So far, the sorts can be grouped into comparison sorts algorithms (one item on the left, another on the right, comparing and deciding which element comes first)

    The best achievable result with comparison is n log n -> Performance limit, tied to the amount of information that is limited from comparing only 2 at a time

    In certain cases, non comparison algorithms, that take advantage of special properties of the data

        --->    For example, integer sorting algorithms only work with integers

    
                ________________________________________________________________________________________________________



                                    ____________________________________
                                                RADIX SORT
                                    ____________________________________

                    Radix sort is a special sorting algorithm that works on lists of numbers

                    It:

                        --->    Never makes comparisons between elements
                        --->    Uses the fact that information about the size of a number is encoded in the number of digits    --> More digits means a bigger number

                
                
                ___________________________________________________________________________________________________________
                

        1)  Radix Sort Helpers

        =>  getDigit(num, place), takes a num and a position and returns the digit at that position
                -       unlike when dealing with array indexing and string indexing, getDigit() indexes from right to left
                -       getDigit() is important for sorting the numbers into the buckets without comparing their actual values
                -       the 'buckets' for instance can be for base 10 numbers and getDigit() goes through the numbers of the array
                                --> each number from right to left (the right is the zeroth digit here, not the left like in arrays and strings)
                                --> we want to iterate over the array and sort the numbers based on the right most digit at first


        =>  digitCount(num), returns the number of digits in a number

        =>  mostDigits(nums), takes an array of numbers and returns the number of digits in the largest numbers in the list
                --> uses digitCount(), running on each number in the list and keeping a running tally on it
                --> no need to return which number itself had the most digits, just the count
*/

// Implementing the getDigit radix sort helper function
function getDigit(num, i) {
  // will divide the number by 10 to the power of i, then flooring it
  // when that is done, we mod 10 (% 10), this gets us the remainder, which is what we are looking for
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// in this example we are dividing by 10 to the power of 2 because i is 2
// console.log(getDigit(7323, 2)); //      returns 3

function digitCount(num) {
  // special case if num is zero -> negative infinity
  if (num === 0) {
    return 1;
  }

  //   log base 10 is basically asking the number 10 'to what power gives us this number?'
  //   using absolute value to get rid of negatives as we are not accounting for them here
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// this example is asking 10 to what power gives us 423? -> then floor it and add 1 to it to get how many digits the number has
// console.log(digitCount(423));   //      returns 3

function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    //   assigning maxDigits to equal the maximum between the current value of maxDigits and digitCount(nums[i]) for each number
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([23, 567, 89, 12234324, 90])); //      returns 8

/*
      _________________________________________________________________________________________


  

  2)  RadixSort implementation

                -----------------------------
                        PSEUDO-CODE
                -----------------------------

          =>    With the helper functions set

          =>    Now we need to call the helper methods in a loop and make the buckets

          =>    For that we define a function that accepts a list of numbers

          =>    it then has to figure out how many digits the largest number has

          =>    We then need to loop according to the number of digits of the largest number
                ---> e.g. if largest digit number in the list [1, 11, 111, 1111, 22, 333] is 1111 then we need to loop 4 times --> 4 digits

          =>    With each loop started from 0 to the number of digits
                -->     Create buckers for each digit (0 to 9)
                        -       a bucket is just an empty array
                        -       will have an array that has 10 sub-arrays
                        -       all sub-arrays start out empty
                                        (indexes 0 to 9 are empty arrays)
                        -       Each time through this loop, take each number, put it in its relevant bucket
                        -       number placement should be based on its kth digit -> starting at zero, we use the zeroth digit (starting from the right with our helper functions), then first and second digits and so on until end of the loop


        =>      Replace existing array with the values in our buckets, starting with 0, going up to 9 --> At this point they are beginning to get sorted, by the end of the loop we get the sorted list
                -       There are 2 loops:
                        >       The outer loop, which happens same number of times as the count of digits of the largest number
                        >       The inner loop that acts on each number in the list and does something to it

        =>      Return list at the end
*/
