// flatMap method first maps all elements of an array and then creates a new array by flattening the array.
// This is identical to a map followed by flat with depth 1.

Array.prototype.customFlatMap = function (callback) {
    let flattenArr = [];

    for(let i = 0; i < this.length; i++) {
        flattenArr = flattenArr.concat(callback(this[i]))
    }

    return flattenArr
}

const arr = [1, [2,3], [4,5]]
console.log(arr.customFlatMap(ele => ele))