

const user = {
    username:"utkarsh",
    price: 999 ,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        
    }
    
}
//user.welcomeMessage()
//user.username = "Utkarsh"  // change kiya utkarsh se Utkarsh
//user.welcomeMessage()

//console.log(this);



/// 2                 this uses in object not in function


/*function chai(){

    let username = "utkarsh"
console.log(this.username);

} 
chai()

*/
///////////  2.2


/*const chai = function(){
    let username = "utkarsh"
console.log(this.username);

}
chai()
*/





const chai = ()  =>   {
    let username = "utkarsh"
console.log(this.username);

}
//chai()


////////// syntax of arrow function   () => {}


/*const addTwo = (num1 , num2) => {        //// this is one way 
    return num1 + num2
}
*/

// const addTwo = (num1 , num2) =>  num1 + num2      // this is 2nd way


const addTwo = (num1 , num2) =>  (num1 + num2)    // this 3rd way 

console.log(addTwo(9 , 7));
