function extraLongFactorials(n) {
    if(n === 0) return 1n
    else return (BigInt(n) * BigInt(extraLongFactorials(n-1))).toString()
}

console.log(extraLongFactorials(25))