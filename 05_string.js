const name = "vishal"
const repocount = 2
// console.log(name + repocount + " value" );
console.log(`hello my name is ${name} and my reppo count is ${repocount}`);

const gameName = new String('histesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //8
console.log(gameName.toUpperCase());  // HISTESHHC
console.log(gameName.charAt('2')); //   s
console.log(gameName.indexOf('t'));  // 3

const newString = gameName.substring(0, 4)  // ignore negative value
console.log(newString);  // hist

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);  // ste


const newStringOne = "  vishal   "
console.log(newStringOne);            // output after space histesh
console.log(newStringOne.trim());  // w/o space histesh

const url = "https://vishal.com/vishal%20chauhan"

url.replace('%20', '-')   //  "https://vishal.com/vishal-chuahan"

console.log(url.include('vishal'));  // true

console.log(gameName.split('-'));   // 'histesh' 'hc' 'com'

