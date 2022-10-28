const binarySearch = require('./closestOrEqualBinarySearch')

// ascending order arrays
const ascOdd = [1, 2, 3, 4, 5]
const ascEven = [1, 2, 3, 4, 5, 6]
// with value gaps
const ascOddGaps = [1, 3, 5, 7, 9]
const ascEvenGaps = [1, 3, 5, 7, 9, 11]
// with value gaps and repeating values
const ascOddGapsRepeat = [1, 3, 5, 7, 9, 11, 11]
const ascEvenGapsRepeat = [1, 3, 5, 7, 9, 11, 11, 11]

// single array
const arrSingle = [1]

// descending order arrays
const descOdd = [5, 4, 3, 2, 1]
const descEven = [6, 5, 4, 3, 2, 1]
// with value gaps
const descOddGaps = [9, 7, 5, 3, 1]
const descEvenGaps = [11, 9, 7, 5, 3, 1]
// with value gaps and repeating values
const descOddGapsRepeat = [9, 9, 9, 7, 5, 3, 1]
const descManyRepeats = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 1, 1, 1, 1, 1]

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
test('value greater than all in array - ascending order', () =>
{
    expect(binarySearch(ascOdd, 6)).toBe(ascOdd.length)
})
test('value less than all in array - ascending order', () =>
{
    expect(binarySearch(ascOdd, 0)).toBe(0)
})
test('odd length - in middle - value 2 not found', () =>
{
    expect(binarySearch(ascOddGaps, 2)).toBe(1)
})
test('odd length - in middle - value 4 not found', () =>
{
    expect(binarySearch(ascOddGaps, 4)).toBe(2)
})
test('odd length - in middle - value 8 not found', () =>
{
    expect(binarySearch(ascOddGaps, 8)).toBe(4)
})
test('even length - in middle - value 2 not found', () =>
{
    expect(binarySearch(ascEvenGaps, 2)).toBe(1)
})
test('even length - in middle - value 4 not found', () =>
{
    expect(binarySearch(ascEvenGaps, 4)).toBe(2)
})
test('even length - in middle - value 8 not found', () =>
{
    expect(binarySearch(ascEvenGaps, 8)).toBe(4)
})
test('even length - in middle value 10 not found', () =>
{
    expect(binarySearch(ascEvenGaps, 10)).toBe(5)
})
test('odd length - multiple repeating values need to be iterated over first', () =>
{
    expect(binarySearch(ascOddGapsRepeat, 10)).toBe(5)
})
test('even length - multiple repeating values need to be iterated over first', () =>
{
    expect(binarySearch(ascEvenGapsRepeat, 10)).toBe(5)
})


// 2. tests with descending order
test('odd length - find 2 at index 3 - descending order', () =>
{
    expect(binarySearch(descOdd, 2, { order: 'desc' })).toBe(3)
})
test('even length - find 5 at index 1 - descending order', () => 
{
    expect(binarySearch(descEven, 5, { order: 'desc' })).toBe(1)
})
// a. values not found
test('value greater than all in array - descending order', () =>
{
    expect(binarySearch(descOdd, 6, { order: 'desc' })).toBe(0)
})
test('value less than all in array - descending order', () =>
{
    expect(binarySearch(descOdd, 0, { order: 'desc' })).toBe(descOdd.length)
})
test('odd length - in middle - value 8 not found - descending order', () =>
{
    expect(binarySearch(descOddGaps, 8, { order: 'desc' })).toBe(1)
})
test('odd length - in middle - value 8 not found - descending order', () =>
{
    expect(binarySearch(descOddGapsRepeat, 8, { order: 'desc' })).toBe(3)
})
test('test', () =>
{
    expect(binarySearch(descManyRepeats, 5, { order: 'desc' })).toBe(10)
})