function capitalize (string) {
    if (typeof string === 'string') {
        let stringArr = []
        for (let i = 0; i < string.length; i++) {
            if (i === 0) {
                stringArr.push(string[i].toUpperCase())
            } else {
                stringArr.push(string[i].toLowerCase())
            }
        }
        return stringArr.join("")
    } else if (typeof string !== 'string') {
        return "Type Error"
    }

}
function reverseString (string) {
    if (typeof string === 'string') {
        let reversedString = []
        for (let i = string.length; i >= 0; i--) {
            reversedString.push(string[i])
        }
        return reversedString.join("")
    } else if (typeof string !== 'string') {
    return "Type Error"
    }
}

function analyzeArray(array) {
    if (Array.isArray(array)) {
        let total = 0
        let isContainingNonNumbers = false
        array.forEach((number) => {
            if (typeof number === 'number') {
                total += number
            } else if (typeof number !== 'number') {
                isContainingNonNumbers = true
            }
            
        })
        if (isContainingNonNumbers === false) {
            let average = total / array.length;
    
            let object = {
                average: average,
                min: Math.min(...array),
                max: Math.max(...array),
                length: array.length,
            }
        
            return object;
        } else if (isContainingNonNumbers === true) {
            return "Type Error"
        }

    } else if (!Array.isArray(array)) {
        return "Type Error"
    }

}

const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    devide: (a,b) => a / b,
}

function caesarCipher(string, shiftNum) {
    const upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowerCaseArr = upperCaseArr.map(letter => letter.toLowerCase());

    let decipheredStringArr = [];

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if (letter.match(/[a-zA-Z]/)) {
            let isUpperCase = letter === letter.toUpperCase();
            let index = isUpperCase ? upperCaseArr.indexOf(letter) : lowerCaseArr.indexOf(letter);

            let newIndex = (index + shiftNum) % 26;
            if (newIndex < 0) newIndex += 26;

            let newLetter = isUpperCase ? upperCaseArr[newIndex] : lowerCaseArr[newIndex];
            decipheredStringArr.push(newLetter);
        } else {
            decipheredStringArr.push(letter);
        }
    }

    return decipheredStringArr.join('');
}


module.exports = { capitalize, reverseString, analyzeArray, caesarCipher, calculator }
