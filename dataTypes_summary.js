// prefer ecmaScript // types of Operator
// link https://262.ecma-international.org/5.1/#sec-11.4.3

// primitive  data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3  // output number

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = symbol('123')
const anotherId = symbol('123')   // dataTypes: symbol
console.log(id === anotherId);

const bigNumber = 1235485901n  // n for number

// refereance types (nonprimitive)
// Array, Objects, Fumctions 

const heros = ["shaktiman", "naagraj", "amrishpuri"]; // array
// object
letmyObj = 
{
     name: "vishal",
     age: 22,
}

const myFunction = function(){    // dataTypes : function
     console.log("hello world");
}

console.log(typeof bigNumber);  // undefined
console.log(typeof outsideTemp); // object


// ***************************************

// stack(primitive), Heap(nonprimitive) :memory
   // copy              // reference
// let myYotubenames = "vishal"
// let anothername = "myYotubenames"
anothername = "bakwash"
console.log(anothername);  // bakwash

let userOne = {
     email: "user@google.com",
     upi: "userpytm",
}
 
let userTwo = userOne
userTwo.email = "vishal@google.com"  
console.log(userOne.email);     // vishal@google.com
console.log(usertwo.email);     // vishal@google.com
