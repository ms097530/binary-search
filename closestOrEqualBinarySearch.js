function binarySearch(arr, val, options = { left: 0, right: arr.length - 1, order: 'asc' })
{

    // arguments:
    // 1. arr = array of values to search
    // 2. left = left boundary
    // 3. right = right boundary
    // 4. val = value to search for
    // return:
    // index of value if found, index to insert at and maintain sorted order if not found

    // handling assigning default options in case a subset of options is provided
    let left = options.left || 0
    let right = options.right || arr.length - 1
    let order = options.order || 'asc'

    // guard clause to make sure arr has actual content
    if (arr.length === 0)
        return 0
    // when sorted in ascending order, values less than first value should be inserted at head of the array
    // when sorted in descending order, values greater than first value should be inserted at head of the array
    if ((val < arr[0] && order == 'asc') || (val > arr[0] && order == 'desc'))
        return 0
    // when sorted in ascending order, values greater than last value should be inserted at arr[arr.length]
    // when sorted in descending order, values less than last value should be inserted at arr[arr.length]
    if ((val > arr[right] && order == 'asc') || (val < arr[right] && order == 'desc'))
        return arr.length


    let mid = Math.floor((left + right) / 2)
    while (left <= right)
    {
        if (order === 'asc')
        {
            if (arr[mid] === val)
            {
                return mid
            }
            if (arr[mid] < val)
            {
                left = mid + 1
            }
            if (arr[mid] > val)
            {
                right = mid - 1
            }
        }
        if (order === 'desc')
        {
            if (arr[mid] === val)
            {
                return mid
            }
            if (arr[mid] > val)
            {
                left = mid + 1
            }
            if (arr[mid] < val)
            {
                right = mid - 1
            }
        }
        mid = Math.floor((left + right) / 2)
    }

    // only make it here if no exact match was found - find index of element that will allow insertion while keeping the array sorted
    // [1,2,3,4,5,6] - find 7 -> left ends at index 6 (out of bounds by 1)
    // [1,2,3,4,5] - find 6 -> left ends at index 5 (out of bounds by 1)
    // [6,5,4,3,2,1] - find 0 -> left ends at index 6 (out of bounds by 1)
    // [5,4,3,2,1] = find 0 -> left ends at index 5 (out of bounds by 1)
    // [1,2,3,4,5,6] = find 0 -> right ends at index -1 (out of bounds by 1), left ends at 0
    // [1,2,3,4,5] = find 0 -> right ends at index -1 (out of bounds by 1), left ends at 0
    // [1,3,3,4,5] = find 2 -> right ends at index 0, left ends at index 1
    // [5,3,3,2,1] = find 4 -> right ends at index 0, left ends at index 1
    // [1,3,3,4,5,6] = find 2 -> right ends at index 0, left ends at index 1
    // [1,2,3,4,4,6] = find 5 -> right ends at index 4, left ends at index 5

    // to insert while remaining sorted:
    // ascending - if in middle: index of the first (from left to right) value that is greater than val
    // descending - if in middle: index of the first (from left to right) value that is less than val 
    // use left to navigate?

    // [1,3,5,7,9,11]
    let insertIndex = left
    if (order === 'asc')
    // find first value in arr that is greater than val
    {
        // traverse right
        if (arr[insertIndex] < val)
        {
            while (insertIndex < arr.length)
            {
                if (arr[insertIndex] > val)
                    // when traversing right, we stop at first valid value and return it
                    return insertIndex
                else
                    ++insertIndex
            }
        }
        // traverse left - find first (left to right) instance of this value
        // nee
        else if (arr[insertIndex] > val)
        {
            while (insertIndex >= 0)
            {
                if (arr[insertIndex] < val)
                    // when traversing left, all values are valid until entering this block, want first valid value, so must increment by 1 for return
                    return insertIndex + 1
                else
                    --insertIndex
            }
        }
    }
    if (order === 'desc')
    // find first value in arr that is less than val
    {
        // traverse right
        if (arr[insertIndex] > val)
        {
            while (insertIndex < arr.length)
            {
                if (arr[insertIndex] < val)
                    // when traversing right, we stop at first valid value and return it
                    return insertIndex
                else
                    ++insertIndex
            }
        }
        // traverse left - find first (left to right) instance of this value
        else if (arr[insertIndex] < val)
        {
            while (insertIndex >= 0)
            {
                if (arr[insertIndex] > val)
                    // when traversing left, all values are valid until entering this block, want first valid value, so must increment by 1 for return
                    return insertIndex + 1
                else
                    --insertIndex
            }
        }
    }
    // return insertIndex + 1
}

module.exports = binarySearch