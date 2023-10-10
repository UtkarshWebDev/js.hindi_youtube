const marvelHero = ["thor" , "iron" , "spiderman"]
const dcHero = ["superman" , "flash" , "batman"]

/*marvelHero.push(dcHero) 
console.log(marvelHero);*/

 //const allHeros = marvelHero.concat(dcHero)
//console.log(allHeros);

const all_new_heros = [...marvelHero,...dcHero]  // easy way 
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7,[6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);



console.log(Array.isArray("Utkatsh")); // asking it is array or not 
console.log(Array.from("Utkarsh"));   //create all string 
console.log(Array.from({name:"Utkarsh"})); // interesting asking in interviwe

let s1 = 100
let s2 =  200
let s3 = 300
console.log(Array.of(s1, s2, s3));