
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
          console.log("please enter name ");
          return
        }
        return`${username} just loggin`

    }
    //console.log(loginUsermessage("utkarsh"));
    console.log(loginUsermessage("")); 

    

    function loginUsermessage(username = "naman" ){
        if(!username){
          console.log("please enter name ");
          return
        }
        return`${username} just loggin`

    }
    //console.log(loginUsermessage("utkarsh"));
    console.log(loginUsermessage(" utkarsh "));   // utkarsh will print