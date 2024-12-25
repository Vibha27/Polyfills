Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
       throw new Error(this + ".call is not a function");
    }
    context.tempRef = this;
    let result = context.tempRef(...args);
    delete context.tempRef;
    return result;
};

const obj = {
    firstName: "Vibha",
    lastName: "Singh",
}

let printName = function(hometown) {
    console.log(this.firstName + " " + this.lastName + " " + hometown)
} 

console.log(printName.call(obj, "Up"))
console.log(printName.myCall(obj, "Up"))