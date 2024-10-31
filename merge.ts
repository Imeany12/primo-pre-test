export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // collection_1, collection_2 are sorted from min to max
  // collection_3 is sorted from max to min
  let result: number[] = [];
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;
  collection_3 = collection_3.reverse();

  while (
    i < collection_1.length &&
    j < collection_2.length &&
    k < collection_3.length
  ) {
    if (
      collection_1[i] <= collection_2[j] &&
      collection_1[i] <= collection_3[k]
    ) {
      result.push(collection_1[i]);
      i++;
    } else if (
      collection_2[j] <= collection_1[i] &&
      collection_2[j] <= collection_3[k]
    ) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] <= collection_2[j]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(collection_2[j]);
      j++;
    }
  }

  while (i < collection_1.length && k < collection_3.length) {
    if (collection_1[i] <= collection_3[k]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (j < collection_2.length && k < collection_3.length) {
    if (collection_2[j] <= collection_3[k]) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (i < collection_1.length) {
    result.push(collection_1[i]);
    i++;
  }

  while (j < collection_2.length) {
    result.push(collection_2[j]);
    j++;
  }

  while (k < collection_3.length) {
    result.push(collection_3[k]);
    k++;
  }

  return result;
}
