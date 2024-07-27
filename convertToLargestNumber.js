/**
 * given an integer, if 2 adjecent digit are both odd or even, we can do a swap for these digit.
 * Like for 597683
 * swap 5 and 9 -> 957683
 * swap 5 and 7 -> 975683
 * swap 6 and 8 -> 975863
 * get largest number 975863
 */

function convertToLargestNumber (num) {
    let numsArr = num.toString().split("");
    for(let i=1; i<numsArr.length; i++) {
        if((numsArr[i]%2 === 0 && numsArr[i-1]%2 === 0) || (numsArr[i]%2 !== 0 && numsArr[i-1]%2 !== 0)) {
            [numsArr[i], numsArr[i-1]] = [numsArr[i-1], numsArr[i]]
        }
    }
    return numsArr.join("")
}

const number = 597683
console.log(convertToLargestNumber(number))