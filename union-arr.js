//  Intersection of Two Arrays
// Problem: Return the common elements between two arrays (only unique results).

// Examples:

// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2] → Output: [2]
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4] → Output: [4, 9]


const arr1 = [1, 2, 2, 1], arr2 = [2, 2], arr3 = [4, 9, 5], arr4 = [9, 4, 9, 8, 4];


const intersectionOfArr = (arr1, arr2) => {
    // first approach intersection of sets,
    const set1 = new Set([...arr1]);
    const uniqueElement = new Set();
    for (let i = 0; i < arr2.length; i++) {
        const number = arr2[i];
        if (set1.has(number)) {
            uniqueElement.add(number);
        }
    }
    return [...uniqueElement];
}

console.log(intersectionOfArr(arr1, arr2));
console.log(intersectionOfArr(arr3, arr4));