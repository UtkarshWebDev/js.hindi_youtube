const name = "Utkarsh"
 const repoCount = 1

// console.log( name + repoCount + "value");    this is not the proper way and this will not use in morden days

 console.log(`My name is ${name} and my repoCount is ${repoCount}`);
 // this called string interpolation   => this is used in morden days 

const gameName = new String('Utkarsh-p')

console.log(gameName[0]);
console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-8, 4)
console.log(anotherString);  
 
 const newStringOne = "   Utkarsh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://utkarsh.com/utkarsh%20prajapati"

console.log(url.replace('%20', '_'));

console.log(url.includes('naman'));
console.log(gameName.split('_'));
