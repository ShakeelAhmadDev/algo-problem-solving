const arrOfNumber = [5, 10, 2, 6];

const getMaxMultiple = (arr) => {
    let min1 = Infinity, min2 = Infinity;
    let max1 = -Infinity, max2 = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];

        if (number > max1) {
            max2 = max1;
            max1 = number;
        } else if (number > max2) {
            max2 = number
        }

        if (number < min1) {
            min2 = min1;
            min1 = number;
        } else if (number < min2) {
            min2 = number;
        }
        // console.log(number, max1, max2, min1, min2, '**');
        // if (number < min1 && number > min2) {
        //     min2 = min1
        //     min1 = number
        // }
        // else if (number < min2 && number > min1) { min2 = number }
        // else if (number > max1 && number > max2) {
        //     max2 = max1
        //     max1 = number
        // }
        // else if (number > max2 && number < max1) { max2 = number }
    }



    // console.log({ max1, max2, min1, min2 }, 'how it looks');

    // const multiple1 = max1 * max2;
    // let multiple2 = 0;

    // if (min1 === -Infinity || min2 === -Infinity) {
    //     multiple2 = 0;
    // } else {
    //     multiple2 = min1 * min2;
    // }

    return Math.max(min1 * min2, max1 * max2);
}

console.log(getMaxMultiple(arrOfNumber), 'Multiple')