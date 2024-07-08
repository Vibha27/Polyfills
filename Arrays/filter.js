// filter iterates over an array by performing a function on each element and returns new array with the elements 
// that satisfy the given condition in callback function

Array.prototype.customFilter = function(callback) {
    let newArr = [];
    for(let i = 0; i<this.length; i++) {
        if(callback(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const arr = [1,2,3,4,5]
console.log(arr.customFilter((num) => num%2 === 0))