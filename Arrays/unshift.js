// Elements to insert at the start of the array.
// Inserts new elements at the start of an array, and returns the new length of the array.

Array.prototype.myUnshift = function(newElement) {
    if (newElement !== undefined) {
        for (let i=this.length; i>=0; i--) {
            this[i] = this[i-1]
        }
        this[0] = newElement    
    }
    return this.length
}

const arr = [1,2,3,4,5]
// console.log(arr.unshift(6))
console.log(arr.myUnshift())