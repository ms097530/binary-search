// normal binary search
function binarySearch(arr, val, options = { left: 0, right: arr.length - 1, order: 'asc' })
{

    // arguments:
    // 1. arr = array of values to search
    // 2. left = left boundary
    // 3. right = right boundary
    // 4. val = value to search for
    // return:
    // index of value if found, -1 if not found

    // handling assigning default options in case a subset of options is provided
    let left = options.left || 0
    let right = options.right || arr.length - 1
    let order = options.order || 'asc'

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