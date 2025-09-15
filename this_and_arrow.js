const user = {
    username: "ram",
    price: 999,        // this. current context ko refer krta h

    welcomeMessage: function() {
       console.log(`${this.username} , welcome to website`)
       console.log(this) //current context
    }
}

//user.welcomeMessage()
//user.username = "shyam"
//user.welcomeMessage()
//console.log(this)  // refer empty object bcs global k under koi object hi nhi h 
// browser k under jo pbject h oo global scope h

/*function chai()
{
    let username = "ram"          
    console.log(this.username);  // not working inside function
}
chai()
*/

/*const chai = () => {       //**arrow function
    let username = "ram"
    console.log(this.username);
}
chai()
*/

const addTwo = (num1, num2) => {
    return num1 + num2;
    console.log(addTwo(3,4))
}