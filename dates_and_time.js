let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreateDate = new Date("2025-07-24")
//dateconsole.log(myCreateDate.toDateString());
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

// ***
newDate.toLocaleString('default', {
    weekday: "Long"
    //timeZone: ""
})