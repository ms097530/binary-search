// normal binary search
function binarySearch(arr, val, options = { left: 0, right: arr.length - 1, order: 'asc' })
{
    /// arguments:
    // 1. arr = array of values to search
    // 2. val = value to search for
    // 3. options = object -> keys/values: left: INTEGER, right: INTEGER, order: 'asc' or 'desc'
    // return:
    // IF FOUND, index of value
    // IF NOT FOUND, -1
    // return value is UNDEFINED if arr is not sorted and/or the provided options.order does not match the actual sorting of arr

    // handling assigning default options in case a subset of options is provided
    let left = options.left || 0
    let right = options.right || arr.length - 1
    let order = options.order || 'asc'

    // guard clause to make sure arr has actual content
    if (arr.length === 0)
        return -1
    // out of bounds values return -1
    if ((val < arr[0] && order == 'asc') || (val > arr[0] && order == 'desc'))
        return -1
    if ((val > arr[right] && order == 'asc') || (val < arr[right] && order == 'desc'))
        return -1

    let mid = Math.floor((left + right) / 2)
    while (left <= right)
    {
        if (order === 'asc')
        {
            if (arr[mid] === val)
            {
                found = true
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
                found = true
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
    return -1
}

module.exports = binarySearch