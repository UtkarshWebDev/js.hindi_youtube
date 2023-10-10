//////singleton//////////////

//const tinderUser = new Object()    // singleton object
const tinderUser ={}         //non singleton object


tinderUser.id = "02abcd"
tinderUser.name = "utkarsh"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    name: "utkarh",
    "fullname":{
fristname:"utkarsh",
lastname:"prajapati"
    }
}

//console.log(regularUser.fullname.lastname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)
//const obj3 = {...obj1,...obj2,...obj4} // spread oparator 

//console.log(obj3);


const user = [
    {
        id:1,
        name:"utkash"
    },
    {
        id:1,
        name:"utkash"
    },
    {
        id:1,
        name:"utkash"
    }
]

user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // tells us that it is their or not 


