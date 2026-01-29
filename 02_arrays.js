const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros) 
/*concat method create new array so we have to store it in another array while push fucntion 
make changes in the existed array */
console.log(allHeros);

//using spread function
const all_new_heros=[...marvel_heros,...dc_heros] //... lagane ke baadd array nhi rha uska har ek values individual ho gya
console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]       

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("athar")) //false
console.log(Array.from("athar")) //[ 'a', 't', 'h', 'a', 'r' ]

console.log(Array.from({name: "Athar"})) //[] -- interesting thing

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

//study in depth Array.isArray, Array.from and Array.of