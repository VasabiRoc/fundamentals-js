export const concatStrings = (a , b) => a + b;

export const isString = (value) => {
    if (typeof value === 'string') {
        return true
    } 
    return false
};

export const identifySign = (n) => {
    if (n === 0) {
        return "Ноль"
    }
    if (n < 0) {
        return "Отрицательное число"
    }
    if(n > 0) {
        return "Положительное число"
    }
};

export const reverseWords = (text) => text.split(' ').reverse().join(' ');

export const wordsCount = (text) => words.length(text.split(" "));