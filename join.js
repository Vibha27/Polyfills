function join(strArr, joiner=null) {
    let str = '';
    for(let i of strArr) {
        str += i
        if(strArr.at(-1) !== i) {
            str += joiner
        }
    }
    return str
}

const arr = ['This', "is", "join", "test", "function."];
console.log(join(arr, ' '))
console.log(arr.join(' '))