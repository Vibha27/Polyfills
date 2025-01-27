// Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.

Array.prototype.myShift = function () {
    let first = this[0];
    for (let i=1; i<this.length; i++) {
        this[i-1] = this[i]
    }
    this.length--;
    return first
}

const arr = [1,2,3,4]
// console.log(arr.shift())
console.log(arr.myShift(), arr, arr.length)