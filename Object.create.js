function objectCreatePolyfill(obj) {
    let newObj = {}
    for (let key in obj ) {
        newObj[key] = obj[key] // copy each key with its value and if object then copy its reference
    }
    return newObj // return new shallow copy
}

let obj1 = {
    firstName: "vibha",
    lastName: "singh",
    contact: {
        phoneNumber: "++91222222"
    }
}

let obj2 = objectCreatePolyfill(obj1);
obj2.contact.phoneNumber = "098765432"

console.log("objectCreatePolyfill => ",obj2.contact.phoneNumber, obj2.contact.phoneNumber)