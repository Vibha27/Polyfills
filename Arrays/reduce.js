// reduce method runs a function on each array element to produce (reduce it to) a single value
// it does not reduce original array

Array.prototype.customReduce = function (callback, initialValue) {
    let index = 0;
    let accumulated = initialValue || this[index++];
    for(let i=index; i<this.length; i++) {
       accumulated = callback(accumulated, this[i])
    }
    return accumulated
}

const arr = [1,2,3,4,5]
console.log(arr.customReduce((acc, curr) => acc+curr, 2))
console.log(arr.reduce((acc, curr) => acc+curr, 2))