// some method Determines whether the specified callback function returns true for any element of an array.

Array.prototype.customSome = function (callback) {
    for(let i=0; i<this.length; i++) {
        if(callback(this[i])) return true
    }
    return false
}
const arr = [1,2,3,4,5]
console.log(arr.customSome((ele, i) => ele % 2 === 0))
