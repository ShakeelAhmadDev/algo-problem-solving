const startArr = [1, 2, 3, 4];

// what if i store the sum first four element 

// [1,2,3,4,10,19,36,]

const sumOfForth = 10;


const returnNthSum = (n) => {
    // const arr =[]; ÷


    // starting ending 0 and end numberNeedToFill is 4
    // Need to sum starting from number 0 and end is n 
    let starting = 0;
    let ending = 3;
    for (let i = 0; i < n; i++) {
        const sum = startArr.slice(starting, ending + 1).reduce((acc, curr) => acc + curr, 0);
        startArr[ending + 1] = sum;
        starting += 1;
        ending += 1;
    }
    console.log(startArr);
    return startArr[n];
};



console.log(returnNthSum(10));