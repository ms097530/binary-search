// normal binary search
function binarySearch(arr, left, right, val)
{
    // arguments:
    // 1. arr = array of values to search
    // 2. left = left boundary
    // 3. right = right boundary
    // 4. val = value to search for
    // return:
    // index of value if found, -1 if not found
    let mid = Math.floor((left + right) / 2)
    while (left <= right)
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
        mid = Math.floor((left + right) / 2)
    }
    return -1
}

module.exports = binarySearch