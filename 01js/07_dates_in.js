// dates 

let myDate = new Date

//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);


let myCreatedDate = new Date(2023,11,25)
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); // to convert in milisec
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1);
//console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",

})

