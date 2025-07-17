const IsSumZero = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum === 0;
}

const temp = [3,2,1,-1,-3,-2];

// store the sum with index in hash map 
// check if any sum already exist in hash map 
// update max length base on previous index 

const findLongestSubArrSumIsZero = (arr) => {
    const sumHistory = new Map();
    let sum = 0;
    let maxLength = 0;
    // const maxLength = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

        if(sum===0){
            maxLength = i+1;
        }

        if(sumHistory.has(sum)){
            const prevIndex = sumHistory.get(sum);
             maxLength = Math.max(maxLength,i-prevIndex);
        }else{
            sumHistory.set(sum,i);
        }
    }

    return maxLength;
}

console.log(findLongestSubArrSumIsZero(temp));
