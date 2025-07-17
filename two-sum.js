// Two Sum
// Problem: Given an array and a target, return indices of two numbers that add up to the target.

// Examples:

// Input: nums = [2, 7, 11, 15], target = 9 → Output: [0, 1]
// Input: nums = [3, 2, 4], target = 6 → Output: [1, 2]


// const ReturnTargetIndex = (arr, target) => {
//     const index = [];

//     let starting = 0;
//     let ending = 1;

//     for (let i = 0; i < arr.length - 1; i++) {
//         const sum = arr.slice(starting, ending + 1).reduce((acc, cur) => acc + cur, 0);
//         if (sum === target) {
//             index.push(starting);
//             index.push(ending);
//         }
//         // console.log(sum, index, 'Start', starting, 'ending', ending);
//         ++starting;
//         ++ending;
//     }
//     return index;
// }


const twoSum = (nums, target) => {
    const map = new Map(); // value -> index

    for(let i=0; i<nums.length; i++){
        const compliment = target - nums[i];
        if(map.has(compliment)){
            console.log(map,'final map')
            const index = map.get(compliment);
            return [index,i];
        }
        map.set(nums[i],i);
        
    }
    console.log(map,'final map')
    return [];

};

// console.log(ReturnTargetIndex([2, 7, 11, 15], 9));

console.log(twoSum([2, 7, 11, 15], 9));


// console.log(ReturnTargetIndex([3, 2, 4], 6));