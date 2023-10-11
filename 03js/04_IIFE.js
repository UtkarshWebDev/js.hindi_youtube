/////////  immediately Invoked Function expressions /////////////

////////////  one way 
(function chai (){
    //////////////this is name IIFE ////////
console.log(`DB CONNECTED`);
}
)();


////// 2nd way

( (name)  => {
    console.log(`DB CONNECTED Two ${name}`);
    }
    )("Utkarsh")
