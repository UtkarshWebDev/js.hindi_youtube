//// IF 


/*const temprature = 41

if (temprature === 40) {
console.log("temprature is less than 40");    
}else{
    console.log("temprature grater than 40");
}*/

//  < , > , <=, >= , == , != , === , !==

/*  const score = 200

if (score > 100) {
 let power = "Fly"
    console.log(`user power ${power}`);
    
}
     console.log(`user power ${power}`);
   
*/

const blance = 1100

//if (blance > 500) console.log("test");  // this called implicit scope

/*if (blance < 500) {
    console.log("less than 500");
    
}else if (blance < 750) {
console.log("less than 750");

}else if (blance < 900) {
    console.log("less than 900");

}else {
    console.log("less than 1200");
}
*/




const userLoggedIn = true
const debitCard = true
const logedinFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {     ///// && is called impercent
    console.log("allow to buy course");

}

if (logedinFromGoogle || loggedInFromEmail ){        // it means  or || 
    console.log("user logged in ");
}



