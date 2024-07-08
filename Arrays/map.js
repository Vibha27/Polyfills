// map iterates over an array and return new array by performing callback function on each element

Array.prototype.customMap = function (callback) {
    let newArray = []
    for(let i = 0; i<this.length; i++) {
        newArray.push(callback(this[i], i))
    }
    return newArray
}

const arr = [1,2,3,4,5];
console.log(arr.customMap((num) => num * 2))