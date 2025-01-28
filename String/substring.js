// Returns the substring at the specified location within a String object.
String.prototype.mySubstring = function (start=0, end=this.length) {
    let newStr = '';
    for (let i=start; i<end; i++) {
        newStr += this[i]
    }
    return newStr
}

const str = "This is Vibha Singh!"
console.log(str.substring(1, 8));
console.log(str.mySubstring(1, 8));