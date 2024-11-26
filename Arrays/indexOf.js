// returns the index of first occurance of element in an array and second arg is an index from which to start searching
Array.prototype.customIndexOf = function (ele,index=0) {
    for (let i = index; i<this.length; i++) {
        if (this[i] === ele) return i
    }
    return -1
}

const arr = [1,4,3,4,5]
console.log(arr.indexOf(-4))
console.log(arr.customIndexOf(-4))