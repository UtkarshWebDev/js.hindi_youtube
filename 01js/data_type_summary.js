// primitive

// 7 types :

/*String
Number
Boolean
null
undefined
Symbol         
BigInt */

const id = Symbol('123')

const anotherid = Symbol('123') 

console.log( id === anotherid );   //false


// Refrence (Non primitive)

// Array

const Heros = ["spidermabn" , "superman", "shazam"]

// Objects

let myObj = {
     Name : "Utkarsh",
     age : 22, 
}


// function
const myfunction = function(){
    console.log("Hello World");

}
 

// to know which data type it is 
console.log( typeof myfunction );


/******************************memory********************************* */

//their are two type of memory

//1 stack (primitive) // it will do copy the values


let myNameis = "Utkarsh"
  
let anotherName = myNameis
anotherName = "bittu"

console.log(myNameis);
console.log(anotherName);



//2 Heap (non primitive)   // it wil take refrance


let userOne = {
    email: "utkarshprajapati6@gmail.com",
    upi : "9860997855@paytm"
}

let userTwo = userOne
userTwo.email = "satyamprajapati6@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
