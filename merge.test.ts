import { merge } from "./merge";

describe("merge function", () => {
  test("merges sorted arrays correctly", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const arr3 = [9, 7, 5];

    const result = merge(arr1, arr2, arr3);
    const expected = [1, 2, 3, 4, 5, 5, 6, 7, 9];

    expect(result).toEqual(expected);
  });

  test("handles an empty array as one of the inputs", () => {
    const arr1 = [];
    const arr2 = [2, 4, 6];
    const arr3 = [9, 7, 5];

    const result = merge(arr1, arr2, arr3);
    const expected = [2, 4, 5, 6, 7, 9];

    expect(result).toEqual(expected);
  });

  test("returns an empty array when all inputs are empty", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const arr3: number[] = [];

    const result = merge(arr1, arr2, arr3);
    const expected: number[] = [];

    expect(result).toEqual(expected);
  });

  test("merges arrays with single elements correctly", () => {
    const arr1 = [1];
    const arr2 = [3];
    const arr3 = [2];

    const result = merge(arr1, arr2, arr3);
    const expected = [1, 2, 3];

    expect(result).toEqual(expected);
  });

  test("merges arrays with duplicate values correctly", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [3, 5, 7];
    const arr3 = [7, 5, 3];

    const result = merge(arr1, arr2, arr3);
    const expected = [1, 3, 3, 3, 5, 5, 5, 7, 7];

    expect(result).toEqual(expected);
  });

  test("merges arrays with large numbers correctly", () => {
    const arr1 = [1000000, 2000000];
    const arr2 = [1500000, 2500000];
    const arr3 = [3000000, 2500000];

    const result = merge(arr1, arr2, arr3);
    const expected = [1000000, 1500000, 2000000, 2500000, 2500000, 3000000];

    expect(result).toEqual(expected);
  });

  test("merges one long array with two short arrays correctly", () => {
    const arr1 = Array.from({ length: 1000 }, (_, i) => i); // 0 to 999
    const arr2 = [1001, 1002];
    const arr3 = [2000, 1500, 1000];

    const result = merge(arr1, arr2, arr3);
    const expected = [...arr1, 1000, 1001, 1002, 1500, 2000].sort(
      (a, b) => a - b
    );

    expect(result).toEqual(expected);
  });

  test("merges arrays with floating-point numbers correctly", () => {
    const arr1 = [1.1, 3.3, 5.5];
    const arr2 = [2.2, 4.4, 6.6];
    const arr3 = [9.9, 7.7, 5.5];

    const result = merge(arr1, arr2, arr3);
    const expected = [1.1, 2.2, 3.3, 4.4, 5.5, 5.5, 6.6, 7.7, 9.9];

    expect(result).toEqual(expected);
  });
});
