// return the element at specified index. it works on negative index from end of the array
Array.prototype.customAt = function(index) {
    return index < 0 ? this[this.length + index] : this[index]
}

const arr = [1,2,3,4,5]
console.log("at=>",arr.at(2))
console.log("customAt=>",arr.customAt(2))