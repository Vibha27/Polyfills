// find method returns the first element from an array which satisfies the condition of callback function

Array.prototype.customFind = function(callback) {
    for(let i=0; i<this.length; i++) {
        if(callback(this[i])) {
            return this[i]
        }
    }
    return undefined
}

const arr = [1,2,3,4,5]
console.log("find=>", arr.find(ele => ele === 0))
console.log("customFind=>", arr.customFind(ele => ele === 0))