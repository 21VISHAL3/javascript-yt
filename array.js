const myArr = [0, 1, 2, 3]
const myHeroes = ["ram", "shyam"]
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// Array Method

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)  // add element at start
// myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexof(3));

// const newArr = myArr.join()

// console.log(myArr);



// console.log(newArr);    // string output

// SLICE AND SPICE

// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);
// const myn2 = myArr.splice(1,3)
// console.log("c", myArr);
// console.log(myn2);


//  const mar_heroes = ["thor", "ironman"]
// const dc_heroes = ["superman", "flash"]
// // mar_heroes.push(dc_heroes);
// // console.log(mar_heroes);

// // const allHeroes = mar_heroes.concat(dc_heroes)  // return new array
// // console.log(allHeroes);

// const all_newheros = [...mar_heroes, ...dc_heroes] // spread operator
// console.log(all_newheros);       // new array

const another_array = [1, 2, 3, [4, 5], 9, [6, 7, [3, 5]]]
const real_another_array = another_array.flat(2)
console.log(real_another_array);

console.log(Aray.isArray("Hitesh"));
console.log(Aray.from("Hitesh")); // "H", "i", "t"
console.log(Aray.from({name: "Hitesh"}));  // **
// Array.of