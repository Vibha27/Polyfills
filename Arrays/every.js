// Determines whether all the members of an array satisfy the specified test
Array.prototype.customEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) return false
    }
    return true
}

const arr = [2,4,6,17,10];
console.log(arr.every(ele => ele%2 === 0))
console.log(arr.customEvery(ele => ele%2 === 0))