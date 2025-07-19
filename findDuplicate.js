const arr1 = [1, 3, 2, 3, 4, 1];
const arr2 = [5, 5, 5, 5];

const findDuplicates=(arr)=>{
    const duplicate = new Set();

    const numberHistory = new Set();

    for(let i=0;i<arr.length;i++){
        const number = arr[i];

        if(numberHistory.has(number)){
            duplicate.add(number);
        }else{
            numberHistory.add(number);
        }
    }

    return Array.from(duplicate);
}

console.log(findDuplicates(arr1));
console.log(findDuplicates(arr2));