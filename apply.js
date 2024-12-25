Function.prototype.myApply = function (context, args) {
    context.fn = this;
    let result = context.fn(...args)
    delete context.fn
    return result
}

const obj = {
    firstName: "Vibha",
    lastName: "Singh",
}

let printName = function(hometown) {
    console.log(this.firstName + " " + this.lastName + " " + hometown)
} 

console.log(printName.apply(obj, ["Up", "Uttar Pradesh"]))
console.log(printName.myApply(obj, ["Up", "Uttar Pradesh"]))