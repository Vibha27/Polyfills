function split (message = '', seperator=null) {
    let arr = [];
    if(seperator === null) {
        arr.push(message)
    } else {
        const startSplit = (str) => {
            if(str.length <= 0) return
            const index = str.indexOf(seperator);
            if(index >= 0) {
                arr.push(str.substring(0, index))
                startSplit(str.substring(index+seperator.length))
            } else {
                arr.push(str)
            }
        }
        startSplit(message)
    }
    return arr
}

const str = "This is test code for split string."
console.log("custom split =>",split(str, " "));
console.log("split =>",str.split(" "));