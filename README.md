# Binary search implementations

This repository contains two binary search implentations. The first is in **binarySearch.js**. The second is in **closestOrEqualBinarySearch.js**. 

Both versions accept the same arguments:
- arr - the array to search
- val - the value to search for
- options object containing:
  - left - left boundary of array to search from, defaults to 0
  - right - right boundary of array to search from, defaults to arr.length - 1
  - order - specifies sorted order of arr (ascending or descending), defaults to 'asc'

The two versions differ in the value returned when the desired value is not found. 

In the first version, standard binary search, the function returns -1 when the value is not found.

In the second version, the function returns the index where the search value should be inserted to maintain sorted order if the value is not already present in the array.