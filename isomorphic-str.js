// Isomorphic Strings
// Problem: Check if two strings follow the same character mapping pattern.

// Examples:

// Input: s = "egg", t = "add" → Output: true
// Input: s = "foo", t = "bar" → Output: false

const s = "egg";
const t = "foo";

const s1 = "foo";
const t1 = "bar";

const checkString = (str1, str2) => {
    const mapString = new Map();
    const revString = new Map();
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    for (let i = 0; i < arr1.length; i++) {
        const sChr = arr1[i];
        const tChr = arr2[i];

        if (mapString.has(sChr)) {
            // check where we have the sChr
            const existing = mapString.get(sChr);
          
            if (existing !== tChr) {
                return false;
            }
        } else {
            // here check if value
            if (revString.has(tChr)) {
                return false;
            }
            mapString.set(sChr, tChr);
            revString.set(tChr, sChr);
        }
    }

    return true;
}

console.log(checkString(s, t));
console.log(checkString(s1, t1));
console.log(checkString("ab", "aa"));


// a ---> a 

//  b ----> a
