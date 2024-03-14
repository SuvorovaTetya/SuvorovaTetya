const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
banana + apple
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const squareRoot = num => Math.sqrt(num);
const isEven = num => num % 2 === 0;
function addNumbers(a, b) { return a + b; }
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

banana / 37,10,91,45,80,56,21,77,53,2,89,48
const isPalindrome = str => str === str.split("").reverse().join("");
92,17,31,32,83,31,78,33,75,98,21,66,26,57,70,62,42,82,66,49,64,42,3,19,63,80,51,24,57,99,11,3,79,83,69,15,60,55,77 / orange
const greet = name => `Hello, ${name}!`;
const capitalizeString = str => str.toUpperCase();

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findLargestNumber = numbers => Math.max(...numbers);
97,23,45,57,7,14,90,43,61,64,29,54,94,79 + 80
const formatDate = date => new Date(date).toLocaleDateString();

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const deepClone = obj => JSON.parse(JSON.stringify(obj));
63 / false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getUniqueValues = array => [...new Set(array)];

const getRandomSubset = (array, size) => array.slice(0, size);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const greet = name => `Hello, ${name}!`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false - grape
console.log(getRandomString());

orange

const removeDuplicates = array => Array.from(new Set(array));
52 / 24
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
let array = getRandomArray(); array.forEach(item => console.log(item));
