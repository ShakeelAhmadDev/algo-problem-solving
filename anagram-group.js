// ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:

// css
// Copy
// Edit
// [["eat","tea","ate"],["tan","nat"],["bat"]]
// "eat", "tea", and "ate" are grouped together.

const arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupBaseOnAnagram = (arr) => {
    const wordMap = new Map();
    for (let item of arr) {
        const sortString = item.split('').sort().join('');
        if (wordMap.has(sortString)) {
            const tempArr = wordMap.get(sortString);
            tempArr.push(item);
            wordMap.set(sortString, tempArr);
        }
        else { wordMap.set(sortString, [item]) };

    }
    return Array.from(wordMap.values())
}

console.log(groupBaseOnAnagram(arr1));
console.log(groupBaseOnAnagram(['']));

// const arr2 = ['e', 'a', 't'];
// const arr3 = ['t', 'e', 'a'];

// console.log(arr2.sort().join(''), arr3.sort().join(''), '---')