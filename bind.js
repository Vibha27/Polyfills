Function.prototype.myBind = function(context, ...args1) {
    let callback = this;
    return (...args2) => {
        return callback.apply(context, [...args1, ...args2])
    }
}

let printName = function(hometown, test) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + test)
} 

const obj = {
    firstName: "Vibha",
    lastName: "Singh",
}

const printMyName = printName.bind(obj, "UP")
const printMyBindName = printName.myBind(obj, "UP")
console.log(printMyName("up"), printMyBindName("up"))