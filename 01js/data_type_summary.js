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


