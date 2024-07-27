/**
 * 2 people A and B have same length of array all contains int, 
 * and with a startFlag odd and even. what you need to do is to calculate 
 * the sum of arrayA-arrayB of each odd item or even item (based on startFlag). 
 * if sum >0, A wins, output A's name, if sum<0, output B's name, if sum==0, output Tie
 * like:
 * Tom=[2,2,3]
 * Jerry=[3,1,4]
 * flag=odd
 * sum = (2-3)+(3-4)=-2
 */

function tomJerryWins (arr1, arr2, flag) {
    let tomScore = 0, jerryScore = 0;
    let initial = flag === "odd" ? 0 : 1;

    for(let i=initial; i<arr1.length; i+=2) {
        tomScore += arr1[i]
        jerryScore += arr2[i]
    }
    return { tomScore, jerryScore }
}

const tom=[2,2,3]
const jerry=[3,1,4]
const flag= "even"
const {tomScore, jerryScore} = tomJerryWins(tom, jerry, flag)
const sum = tomScore - jerryScore;

if(sum < 0) {
    console.log("Jerry!", jerryScore)
} else if(sum > 0) {
    console.log("Tom!", tomScore)
} else {
    console.log("Tie!", tomScore, jerryScore)
}