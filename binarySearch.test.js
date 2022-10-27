const binarySearch = require('./binarySearch')

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5, 6]

const arr3 = [1, 3, 5, 7, 9]
const arr4 = [1, 3, 5, 7, 9, 11]

const arr5 = [1]

test('odd length - find 3 at index 2', () =>
{
    expect(binarySearch(arr1, 0, 4, 3)).toBe(2)
})
test('even length - find 3 at index 2', () =>
{
    expect(binarySearch(arr2, 0, 5, 3)).toBe(2)
})
test('odd length - find last value, 5, at index 4', () =>
{
    expect(binarySearch(arr1, 0, 4, 5)).toBe(4)
})
test('even length - find last value, 6, at index 5', () =>
{
    expect(binarySearch(arr2, 0, 5, 6)).toBe(5)
})
test('odd length - find 2 at index 1', () =>
{
    expect(binarySearch(arr1, 0, 4, 2)).toBe(1)
})
test('even length - find 5 at index 4', () =>
{
    expect(binarySearch(arr2, 0, 5, 5)).toBe(4)
})
test('odd length - value not found, greater than all values', () =>
{
    expect(binarySearch(arr1, 0, 4, 6)).toBe(-1)
})
test('even length - value not found, greater than all values', () =>
{
    expect(binarySearch(arr2, 0, 4, 7)).toBe(-1)
})
test('odd length - value not found, less than all values', () =>
{
    expect(binarySearch(arr1, 0, 4, 0)).toBe(-1)
})
test('even length - value not found, less than all values', () =>
{
    expect(binarySearch(arr2, 0, 5, 0)).toBe(-1)
})
test('odd length - value not found, would be found in middle of array', () =>
{
    expect(binarySearch(arr3, 0, 4, 2)).toBe(-1)
})
test('even length - value not found, would be found in middle of array', () =>
{
    expect(binarySearch(arr4, 0, 5, 8)).toBe(-1)
})