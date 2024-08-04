/* 
 * Currying is defined as changing a function having multiple arguments 
 * into a sequence of functions with a single argument.
 * functions that translate a function from callable as add(1, 2, 3) into callable as add(1)(2)(3)
*/
function sum (num1) {
    return (num2) => {
        return (num3) => {
            return num1+num2+num3
        }
    }
}

console.log(sum(2)(4)(5))
console.log(sum(2)(4)(5))