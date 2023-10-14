////////////////////          1 way  with arrow fucn

const coding = ["js" , "rb" , "py", "java", "cpp" ]

/*coding.forEach( function (value) {
    console.log(value);
} 
*/


////////////////////          2 way  with arrow fucn


/*coding.forEach(  (value) => {
    console.log(value);
})
*/

////////////////////////        3rd way         ////////////////////////////////////

/*function printMe(value){
    console.log(value);
}

coding.forEach(printMe)

*/

//////////////////////// itresting  ///////////////////

/*
coding.forEach(  (value, index, arr) => {
    console.log(value, index, arr);
})

*/



const  myCoding = [

    {
        langName:"Javascript", 
        langFileName:"js"
    },
    {
        langName:"Java", 
        langFileName:"java"
    },
    {
        langName:"python", 
        langFileName:"py"
    },
]

myCoding.forEach(   (item)  => {
//console.log(item);
//console.log(item.langFileName);
//console.log(item.langName);
})