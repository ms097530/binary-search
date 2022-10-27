const binarySearch = require('./binarySearch')

// ascending order arrays
const ascOdd = [1, 2, 3, 4, 5]
const ascEven = [1, 2, 3, 4, 5, 6]
// with value gaps
const ascOddGaps = [1, 3, 5, 7, 9]
const ascEvenGaps = [1, 3, 5, 7, 9, 11]

// single array
const arr5 = [1]

// descending order arrays
const descOdd = [5, 4, 3, 2, 1]
const descEven = [6, 5, 4, 3, 2, 1]
// with value gaps
const descOddGaps = [9, 7, 5, 3, 1]
const descEvenGaps = [11, 9, 7, 5, 3, 1]

// 1. tests with ascending order
test('odd length - find 3 at index 2', () =>
{
    expect(binarySearch(ascOdd, 3)).toBe(2)
})
test('even length - find 3 at index 2', () =>
{
    expect(binarySearch(ascEven, 3)).toBe(2)
})
test('odd length - find last value, 5, at index 4', () =>
{
    expect(binarySearch(ascOdd, 5)).toBe(4)
})
test('even length - find last value, 6, at index 5', () =>
{
    expect(binarySearch(ascEven, 6)).toBe(5)
})
test('odd length - find 2 at index 1', () =>
{
    expect(binarySearch(ascOdd, 2)).toBe(1)
})
test('even length - find 5 at index 4', () =>
{
    expect(binarySearch(ascEven, 5)).toBe(4)
})
// a. values not found
test('odd length - value not found, greater than all values', () =>
{
    expect(binarySearch(ascOdd, 6)).toBe(-1)
})
test('even length - value not found, greater than all values', () =>
{
    expect(binarySearch(ascEven, 7)).toBe(-1)
})
test('odd length - value not found, less than all values', () =>
{
    expect(binarySearch(ascOdd, 0)).toBe(-1)
})
test('even length - value not found, less than all values', () =>
{
    expect(binarySearch(ascEven, 0)).toBe(-1)
})
test('odd length - value not found, would be found in middle of array', () =>
{
    expect(binarySearch(ascOddGaps, 2)).toBe(-1)
})
test('even length - value not found, would be found in middle of array', () =>
{
    expect(binarySearch(ascEvenGaps, 8)).toBe(-1)
})


// 2. tests with descending order
test('odd length - find 2 at index 3', () =>
{
    expect(binarySearch(descOdd, 2, { order: 'desc' })).toBe(3)
})
test('even length - find 5 at index 1', () => 
{
    expect(binarySearch(descEven, 5, { order: 'desc' })).toBe(1)
})
// a. values not found
test('odd length - value not found, greater than all values', () =>
{
    expect(binarySearch(descOddGaps, 10, { order: 'desc' })).toBe(-1)
})
test('even length - value not found, greater than all values', () =>
{
    expect(binarySearch(descEvenGaps, 12, { order: 'desc' })).toBe(-1)
})