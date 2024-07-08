// Combines two or more arrays. This method returns a new array without modifying any existing arrays.

Array.prototype.customConcat = function(...args) {
    let concatenatedArr = [];

    for(let i=0; i<this.length; i++) { // copy array in new array
        concatenatedArr.push(this[i])
    }

    for(let k=0; k<args.length; k++) { // iterate over functions arguments
        if(Array.isArray(args[k])) { // if element is array then iterate and push each element in array
            for(let j=0; j<args[k].length; j++) {
                concatenatedArr.push(args[k][j])
            }
        } else { // if not an array then simply push it
            concatenatedArr.push(args[k])
        }
    }

    return concatenatedArr
}

const arr = [1,2,3,4,5]
console.log("concat=>",arr.concat([6,7],[8,9], 10))
console.log("customConcat=>",arr.customConcat([6,7],[8,9], 10))