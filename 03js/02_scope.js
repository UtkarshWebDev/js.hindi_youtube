
let a =300 //global scope 


if (true) {
    let a = 10            
const b = 20
//console.log("INNER:", a);
}

//console.log(a);
//console.log(b);
//console.log(c);
 


 ////////////////////////////////////2nd video //////////////////////

 function One(){
    const username = "Utkarsh"

function Two() {
    const website = "youtube"
    console.log(username);
    
}
//console.log(website);

//Two()

 }
 
//One()


 if (true){
    const username = "utkarsh"

    
    if(username === "utkarsh"){
        const website = " youtube"
        //console.log(username + website);
    }
     //console.log(website);
     
 }
 //console.log(username);


 ////////////////////////////    hoisting     /////////////////////////////////    important
 //console.log(addOne(5));
 
function addOne(num){      ////  1st way 
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}



