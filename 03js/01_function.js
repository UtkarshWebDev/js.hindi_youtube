
/*saymyname function(){

    console.log("U");
    console.log("t");
    console.log("k");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    }*/
    
    
    //saymyname()         // saymyname is called refrence and '()' is called execute
    
    
    
    /*function addTwoNumber(number1, number2){
        console.log(number1 + number2);
    }*/
    


    function addTwoNumber(number1, number2){
       /* let result = number1 + number2
    return result                   this is one way */
    return number1 + number2 /// this is 2nd way

    }
    
    const result = addTwoNumber(3, 5)

    //console.log("Result:", result);   



   /* function loginUsermessage(username){
        return`${username} just loggin`

    }
    //console.log(loginUsermessage("utkarsh"));
    console.log(loginUsermessage());*/



  /*  function loginUsermessage(username ){
        if(!username){
          console.log("please enter name ");
          return
        }
        return`${username} just loggin`

    }
    //console.log(loginUsermessage("utkarsh"));
    console.log(loginUsermessage());*/


    

    function loginUsermessage(username = "naman" ){   /// naman will print
        if(!username){
         // console.log("please enter name ");
          return
        }
        return`${username} just loggin`

    }
    //console.log(loginUsermessage("utkarsh"));
    //console.log(loginUsermessage("")); 

    

    function loginUsermessage(username = "naman" ){
        if(!username){
        //  console.log("please enter name ");
          return
        }
        return`${username} just loggin`

    }
    //console.log(loginUsermessage("utkarsh"));
    //console.log(loginUsermessage(" utkarsh "));   // utkarsh will print




    //////////////////////>>>>2nd video <<<<<<</////////////////


    //1


function calculteCartPrice(num1){
  return num1
}
//console.log(calculteCartPrice(2));

//2 

function calculteCartPrice(...num1){       // ... three dot hi valid h  => isse spread bolte hai 
  return num1
}
//console.log(calculteCartPrice(200, 300, 400, 2000));

//3


function calculteCartPrice(val1, val2, ...num1){ // val1 , val2 , ne 200 , 400 ko leliya or jo bachi voh array me h 
  return num1
}
//console.log(calculteCartPrice(200, 300, 400, 2000));


// 4  ( object ko function me kaise use krte h )


const user = {
  username: "Utkarsh",
  price: 199
}

function handdleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handdleObject(user)

handdleObject({
  username: "satyam",
  price: 399
})


// 5 arrays 


const myNewArray = [200,400,100,600]

function returnSecondValue(getarray){
  return getarray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));


