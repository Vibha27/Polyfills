/**
 * Kadane’s Algorithm is :
 * The subarray with negative sum is discarded (by assigning max_ending_here = 0 in code).
 * We carry subarray till it gives positive sum.
 */
function maximumSubArray (arr) {
    let sum = 0;
    let maximumSum = arr[0];

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
        if(sum > maximumSum) {
            maximumSum = sum
        } 
        if(sum < 0) {
            sum = 0
        }
    }

    return maximumSum
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maximumSubArray(arr))