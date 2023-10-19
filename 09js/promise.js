
// one way

/*
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


*/


////// 2n way
/*



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("asynct task resolve");
})



*/


///   3 way 

/*
const promiseThree = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({username:"utkarsh" , email:"utkarsh789@example.com" })


}, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

*/







//////////////       one way 


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"utkarsh" , email:"utkarsh789@example.com"})
        }else{
            reject('ERROR: something went wrong')
        }
        
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return( user.username)
})
.then( (username) => {
console.log(username);
})
.catch(function (error) {
    console.log(error);
}).finally(       () => console.log("the promise is either resolved or rejected"))



///////////////  2 nd way

const promiseFive = new Promise((resolve, reject) => {

    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"javascript" , email:"utkarsh789@example.com"})
        }else{
            reject('ERROR: js went wrong')
        }
        
    }, 1000)
    
}) 


async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.error();
    }
}

consumepromiseFive()


/*async function getallUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
       
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("E" , error);
    }
}
getallUsers()

*/



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))