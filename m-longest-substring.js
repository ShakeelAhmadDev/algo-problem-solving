// 5. Longest Substring Without Repeating Characters
// Problem: Find the length of the longest substring with all unique characters.

// Examples:

// Input: "abcabcbb" → Output: 3
// Input: "bbbbb" → Output: 1


const str1 = "abcabcebb";
const str2 = "bbbbb";

const findLongestSubStr = (str) => {
    let maxLength = 0;
    let start = 0;
    const strArr = str.split('');
    const strHistory = new Map();
    for (let i = 0; i < strArr.length; i++) {
        const chr = strArr[i];
        if (strHistory.has(chr) && strHistory.get(chr) > start) {
            start = end+1;
        } 

        strHistory.set(chr,end); //store last index for char

        maxLength = Math.max(maxLength, end-start+1);
    }
    console.log(strHistory);
    return maxLength;
}


// abcabcebbb


// const findLongestSubStrV1 = (str) => {
//     let maxLength = 0;
//     let start = 0;
//     const strArr = str.split('');
//     const strHistory = new Map();
//     let longStr = '';
//     for (let end = 0; i < strArr.length; i++) {
//         const chr = strArr[end];
//         longStr = chr+longStr;
//         if(strHistory.has(longStr)){
//             // console.log(longStr);

//         }else{
//             strHistory.set(longStr,end)
//         }
//         //  console.log(chr,end);

//     }
    
//     console.log(strHistory);
//     return maxLength;
// }


console.log(findLongestSubStr(str1));
console.log(findLongestSubStr(str2));
console.log(findLongestSubStr('abcabcbb'))