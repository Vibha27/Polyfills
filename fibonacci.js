// fibonacci series => 0 1 1 2 3 5 8 13 21...
// 1) With loops
function fibonacci () {
    let first = 0 ;
    let second = 1;
    let sum = 0;
    console.log(first)
    console.log(second)

    for (let i=2; i<5; i++) {
        sum = first + second;
        console.log(`Add ${first} with ${second} =>`,sum);
        first = second
        second = sum
    }
}

console.log(fibonacci())

// 2) With recursion
function fiboSeries(num) {
    if (num <= 1) {
        return num
    }
    return fiboSeries(num-1) + fiboSeries(num-2) // 3 + 4
}

console.log(fiboSeries(8))


