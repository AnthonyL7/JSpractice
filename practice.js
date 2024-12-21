console.log('Hello')
const name_1 = 'Chris';
const greeting = `Hello ${name_1}`;
console.log(greeting);

// concatenation using  "+"
const greeting2 = 'Hello';
const name2 = 'Chris';
console.log(greeting2 +", " + name2);

//template literals
const greeting3 = 'Hello';
const name3 = 'Chris';
console.log(`${greeting3}, ${name3}`);

//Multiline strings
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

// Line break character
const newline2 = 'One day you finally \nwhat you had to do, and began,';
console.log(newline2);

//Using quotes within Strings
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1)
console.log(goodQuotes2)

//Concatenate string and number
const name4 = 'Front ';
const number = 242
console.log(name4 + number);

//Converting string to a number
const myString = '123'
const myNum = Number(myString);
console.log(typeof myNum);

//Converting number to a string
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
