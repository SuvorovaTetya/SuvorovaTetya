const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const reverseString = str => str.split("").reverse().join("");

let array = getRandomArray(); array.forEach(item => console.log(item));
