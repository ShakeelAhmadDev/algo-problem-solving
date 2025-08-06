// 8. Subarray Sum Equals K
// Problem: Find the number of subarrays whose sum equals k.

// Examples:

// Input: nums = [1,1,1], k = 2 → Output: 2
// Input: nums = [1,2,3], k = 3 → Output: 2

const num1 = [1, 1, 1];
const num2 = [1, 2, 3];

// [1],[1,2],[2.3],[1,3];


// store feq mean how 

const FindSubArrSumK = (arr, k) => {
    const subArrMap = new Map();

    let sumCount = 0;
    let sum = 0;
     subArrMap.set(0, 1);
    for (let [_, num] of arr.entries()) {
        // console.log(index, '21')
        sum += num;

        const sumDiff = sum - k;
        
        if (sumDiff === 0) {
            sumCount += 1;
        }
        if (subArrMap.has(sumDiff)) {
            sumCount += subArrMap.get(sumDiff) ;
        }
        // frequency update base on the previous value otherwise just init with value 1
        subArrMap.set(sumDiff, (subArrMap.get(sum) || 0) + 1)
    }
    console.log(subArrMap)
    return sumCount
}

console.log(FindSubArrSumK(num2, 3));
console.log(FindSubArrSumK([3, 4, 7, 2, -3, 1, 4, 2], 7));


console.log(FindSubArrSumK([1, 2, 3], 3));