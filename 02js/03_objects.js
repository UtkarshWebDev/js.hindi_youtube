


//object literals
const mySym = Symbol("mykey1") // symbol



const JsUser = {
    name: "Utkarsh",
    "fullName":"Utkarsh Prajapati",
     [mySym]:"mykey1", //symbol
    age: 23,
    location: "Nagpur",
    email: "utkarshprajapati6@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["monday", "saturday"]


}


//console.log(JsUser.email); // not this coz name is work as a string 
//console.log(JsUser["email"]);  //use this 
//console.log(JsUser["fullName"]); 
//console.log(JsUser[mySym]) //symbol



JsUser.email = "satyamprajapati6@gmail.com" // to change something
//Object.freeze(JsUser) //hear it will freeze ,it will not change after freeze
JsUser.email = "utkasrh9860997855@gmail.com" // not change cuz it us freeze


//console.log(JsUser);

///////////////function///////////////////////////////


JsUser.greeting = function(){
    console.log("hello js user");
}


JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());