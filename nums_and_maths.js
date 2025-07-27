const score = 400
console.log(score);

const balance = new Number(100) 
console.log(balance);    // [Number: 100]  
console.log(balance.toFixed(2)); // 100.00
const otherNumber = 123.862  // 123.9
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000 
console.log(balance.toFixed(2));


/* 
Number {100}
[[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()  => 1,000,000
toLocaleString('en-IN')  => 10,00,000
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
100
*/

// **********MATHS***************

console.log(Math)
console.log(Math.abs(-4));   // 4
console.log(Math.round(4.6))  // 5
console.log(Math.ceil(4.2))  //5
console.log(Math.floor(4.9))  // 4

console.log(Math.random());  // 0-1
console.log((Math.random()*10) + 1);
 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min);
