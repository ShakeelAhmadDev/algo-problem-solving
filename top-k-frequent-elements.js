// 7. Top K Frequent Elements
// Problem: Return the k most frequent elements in an array.

// Examples:

// Input: nums = [1,1,1,2,2,3], k = 2 → Output: [1, 2]
// Input: nums = [4, 4, 4, 5, 5, 6], k = 1 → Output: [4]

const nums1 = [3,3,3,1,1,1,2,2,3];
const nums2 = [];

const findMostFrequentNumber = (arr,k) => {
    const numberMap = new Map();

    for(let num of arr){
        if(numberMap.has(num)){
            numberMap.set( num,numberMap.get(num) + 1);
        }else{
            numberMap.set(num,1);
        }
    }

    const freqNumberArr = Array.from(numberMap.entries());

   

    return freqNumberArr.sort((a,b)=>b[1]-a[1]).slice(0,k).map(item => item[0]);
}

