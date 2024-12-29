// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Array.prototype.customFlat = function (depth = 1) {
  function recursive(subArr, depth) {
    let subFlattenArr = [];
    if (depth === 0) {
      // base condition to stop recursion
      return subFlattenArr.concat(subArr); // when depth is 1 then directly concat the result
    } else {
      for (let i = 0; i < subArr.length; i++) {
        if (Array.isArray(subArr[i])) {
          subFlattenArr = subFlattenArr.concat(recursive(subArr[i], depth - 1));
        } else {
          subFlattenArr.push(subArr[i]);
        }
      }
    }
    return subFlattenArr;
  }

  return recursive(this, depth);
};

const arr = [1, [2, 3, [4, 5]], 6, 7, [8, [9, 10, [11, 12]]]];
console.log("flat =>", arr.flat());
console.log("custom flat =>", arr.customFlat());


function flat1(arr, depth = 1) {
  if (arr) {
    let flattenArr = [];
    if (arr.length) {
      const recursiveFlat = (arr2, new_depth) => {
        for (let i = 0; i < arr2.length; i++) {
          if (new_depth > 0 && Array.isArray(arr2[i])) {
            recursiveFlat(arr2[i], new_depth - 1);
          } else {
            flattenArr.push(arr2[i]);
          }
        }
      };
      recursiveFlat(arr, depth);
    }
    return flattenArr;
  } else {
    return new Error("arr is undefined!");
  }
}

const arr1 = [1, [2], [3, [4]]];
console.log(flat1(arr1, 1));

function flat2(arr, depth = 1) {
  const flattened = [];

  for (const i in arr) {
    // this will only return index that has been defined or has any value (null, undefined as well).
    if (depth && Array.isArray(arr[i])) {
      flattened.push(...flat(arr[i], depth - 1));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

const arr2 = [1, 2, , , undefined, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat2(arr2, Infinity));
