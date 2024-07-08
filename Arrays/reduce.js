// reduce method runs a function on each array element to produce (reduce it to) a single value
// it does not reduce original array

Array.prototype.customReduce = function (callback, initialValue) {
    let accumulated = initialValue;
    for(let i=0; i<this.length; i++) {
        if(accumulated) {
            accumulated = callback(accumulated, this[i])
        } else {
            accumulated = this[i]
        }
    }
    return accumulated
}

const arr = [1,2,3,4,5]
console.log(arr.customReduce((acc, curr) => acc+curr))