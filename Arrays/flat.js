// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Array.prototype.customFlat = function (depth = 1) {

    function recursive(subArr, depth) {
        let subFlattenArr = [];
        if(depth === 0) { // base condition to stop recursion
            return subFlattenArr.concat(subArr) // when depth is 1 then directly concat the result
        } else {
            for(let i = 0; i<subArr.length; i++) {
                if(Array.isArray(subArr[i])) {
                    subFlattenArr = subFlattenArr.concat(recursive(subArr[i], depth-1))
                } else {
                    subFlattenArr.push(subArr[i])
                }
            }

        }
        return subFlattenArr
    }

    return recursive(this,depth)
}

const arr = [1,[2,3,[4,5]], 6, 7, [8,[9,10, [11, 12]]]];
console.log("flat =>",arr.flat())
console.log("custom flat =>",arr.customFlat())