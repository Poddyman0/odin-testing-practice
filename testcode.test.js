const { capitalize, reverseString, analyzeArray, caesarCipher, calculator } = require('./code');


describe('capitalize function that takes a string and returns it with the first character capitalized.', () => {
    test('first letter capitalised in lower case string', () => {
    expect(capitalize("hello")).toMatch("Hello");
    });
    test('first letter capitalised in higher case string', () => {
        expect(capitalize("HELLO")).toMatch("Hello");
    });
    test('accepts a string variable and returns a string variable', () => {
        expect(typeof capitalize("string")).toBe('string');
    });

    test('Does not accept non-string variables and returns typeerror', () => {
        expect(capitalize(2)).toMatch("Type Error");
    });
    test('Does not accept non-string variables and returns typeerror', () => {
        expect(capitalize({apples: "tree"})).toMatch("Type Error");
    });

    test('Does not accept non-string variables and returns typeerror', () => {
        expect(capitalize([4,5,3])).toMatch("Type Error");
    });
    test('To capitalise first letter in a sentence using RegEx', () => {
        expect(capitalize("Hello World")).toMatch(/Hello world/);
    });
    test('does not accept multiple strings', () => {
        expect(capitalize("hello", "world")).toMatch("Hello");
    });
})


describe('reverseString function that takes a string and returns it reversed.', () => {
    test('returns a reversed string', () => {
        expect(reverseString("abcd")).toMatch("dcba");
    });
    test('does not return a not reversed string', () => {
        expect(reverseString("abcd")).not.toMatch("abcd")
    });

    test('recieves a string and returns a string', () => {
        expect(typeof reverseString("abcd")).toBe("string");
    });

    test('Does not accept non-string variables and returns typeerror', () => {
        expect(reverseString(2)).toMatch("Type Error");
    });
    test('Does not accept non-string variables and returns typeerror', () => {
        expect(reverseString({apples: "tree"})).toMatch("Type Error");
    });

    test('Does not accept non-string variables and returns typeerror', () => {
        expect(reverseString([4,5,3])).toMatch("Type Error");
    });
    test('To capitalise first letter in a sentence using RegEx', () => {
        expect(reverseString("Hello")).toMatch(/olleH/);
    });
    test('does not accept multiple strings', () => {
        expect(reverseString("Hello", "world")).toMatch("olleH");
    });

})

describe('analyzeArray function takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
    test('returns an object with corect average, min, max and length values.', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
          });
    });
    test('returns an object.', () => {
        expect(typeof analyzeArray([1,8,3,4,2,6])).toBe('object')
    })
    test('returns an object with average, min, max and length properties', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
            average: expect.any(Number),
            min: expect.any(Number),
            max: expect.any(Number),
            length: expect.any(Number)
        }))
    })
    test('returns Type Error when given an array not containing numbers', () => {
        expect(analyzeArray([{test: "text"},8,"p",4,true,6])).toMatch('Type Error')
    })
    test('returns Type Error when given a object', () => {
        expect(analyzeArray({example: "Hello World"})).toMatch('Type Error')
    })
    test('returns Type Error when given a string', () => {
        expect(analyzeArray("Hell World")).toMatch('Type Error')
    })
    test('returns Type Error when given a number', () => {
        expect(analyzeArray({example: "Hello World"})).toMatch('Type Error')
    })
})

describe('caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.', () => {
    test('takes a string and shift factor and returns a string', () => {
        expect(typeof caesarCipher("ABC", 5)).toEqual("string");
    })
    test('takes a string of letters with lowercase capitalisation and shift factor of 0 and returns sane letters in lower capitalisation', () => {
        expect(caesarCipher("abc", 0)).toMatch("abc");
    })
    test('takes a string of letters with higher capitalisation and shift factor of 0 and returns sane letters in lower capitalisation', () => {
        expect(caesarCipher("ABC", 0)).toMatch("ABC");
    })
    test('takes a string of letters with alternating capitalisation and shift factor of 0 and returns alternating capitalisation', () => {
        expect(caesarCipher("AbC", 0)).toMatch("AbC");
    })
    test('takes a string of letters with alternating capitalisation and shift factor of 1 and returns a correct shiftfactor and alternating capitalisation', () => {
        expect(caesarCipher("AbC", 1)).toMatch("BcD");
    })
    test('takes a string of letters with alternating capitalisation and shift factor of 10 and returns a correct shiftfactor and alternating capitalisation', () => {
        expect(caesarCipher("AbC", 10)).toMatch("KlM");
    })
    test('takes a string including punctuation and returns punctuation in correct index.', () => {
        expect(caesarCipher("abc!.,?", 1)).toMatch("bcd!.,?");
    })
    test('takes a string with a shift number greater than the alphabet and the alphabet loops back around.', () => {
        expect(caesarCipher("Z", 1)).toMatch("A");
    })
    test('takes a string with a shift number less than the alphabet and the alphabet loops back around.', () => {
        expect(caesarCipher("a", -1)).toMatch("z");
    })
})

describe('A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation', () => {
    test('accurately add numbers together', () => {
        expect(calculator.add(1, 2)).toBe(3);
    })
    test('accurately subtracts numbers', () => {
        expect(calculator.subtract(3, 2)).toBe(1);
    })
    test('accurately times numbers together', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    })
    test('accurately devides numbers', () => {
        expect(calculator.devide(6, 3)).toBe(2);
    })
})



