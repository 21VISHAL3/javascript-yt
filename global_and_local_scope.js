var c = 3000

// Global scope
 
let a = 300



 if (true)           // block scope
 {
    let a = 10
    const b = 20
    //var c = 30
    //console.log("INNER:", a);
 }

 for(let i=0; i<Array.lrngth; i++){
    const element = array[i];

 }


 console.log(a);
 //console.log(b);
 //console.log(c);


function one(){              // **CLOSURE**
    const username = "hitesh"

    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website); no scope
   // two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
       const website = " youtube"  
       //console.log(username + website);      
    }

    //console.log(website);
}
//console.log(username)

// ***** interesting

console.log(addone(5));
function addone(num){
    return num + 1
}


console.log(addTwo(7));
const addTwo=(num)=>{
    return num+3
};
