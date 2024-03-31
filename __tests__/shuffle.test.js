const shuffle = require("../src/shuffle");

describe('shuffle function tests', () => {
  test('shuffle returns an array', () => {
    const result = shuffle([]);
    expect(Array.isArray(result)).toBe(true);
  });

  test('shuffle returns an array of the same length as the argument sent in', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(result.length).toEqual(inputArray.length);
  });

  test('all the same items are in the shuffled array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    inputArray.forEach(item => expect(result.includes(item)).toBe(true));
  });

  test('items have been shuffled around', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(result).not.toEqual(inputArray);
    expect(result.sort()).toEqual(inputArray.sort());
  });
});

// i had to do a lot of researching on this part of the assessment, most of my info came from https://jestjs.io/docs/expect
// i used it a lot for part 3