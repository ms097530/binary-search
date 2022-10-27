function binarySearch(arr, val, options)
{
    // arguments:
    // 1. arr = array of values to search
    // 2. left = left boundary
    // 3. right = right boundary
    // 4. val = value to search for
    // return:
    // object containing index and whether the value is found
    let mid = Math.floor((left + right) / 2)
    let found = false
    while (left <= right)
    {
        if (arr[mid] === val)
        {
            found = true
            break
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
    return { index: mid, found: found }
}

module.exports = binarySearch