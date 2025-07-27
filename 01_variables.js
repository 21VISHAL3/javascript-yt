const accountId = 12345
let accountEmail  =  "vishal@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"



// accountId = 34  // not allowd

console.log(accountId);

/*
 prefer not to use var 
 because of isseue in block scope and function scope
*/
accountEmail = "hab@kj.com"
accoumtPassword = "6253"
accountCity = "kota"
 
console.table([accountId, accountEmail, accountPassword, accountCity])