/*for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
       console.log("5 is best number ");
        
    }
 console.log(element);
}

*/


////////////             2               //////////



for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
   //console.log(`ineer loop value ${j} and ineer loop ${i}`);


   //for multiplication

//console.log(i + '*' + j + '=' + i*j);

   }
}



////////////////////////////// 3 arrays ////


let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);   /// this for checking the length 
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

//console.log(element);    
}




/////////////// 4    break and continue //////////////////


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
       continue
    }
    console.log(`value of i is ${index}`);
}


