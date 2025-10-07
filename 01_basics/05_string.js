const name="Athar"
const repoCount=2

//console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way of decalring string
const game=new String(`taken3`)
/*key value pair
0 : 't'
1 : 'a'
2 : 'k'
3 : 'e'
4 : 'n'
5 : '3'
*/
console.log(game[0]) //=> t
console.log(game.__proto__) //=> {} - an object
console.log(game.length) //=> 6
console.log(game.toUpperCase()) //=>TAKEN3
console.log(game.charAt(2))
console.log(game.indexOf(`e`))

const newString=game.substring(0,4)
console.log(newString) //=> take (0,1,2,3) here 4 is not included

const anotherString=game.slice(-6,2) // Note** start -6 means length+(-6)
console.log(anotherString) //=> ta
/**const anotherString=game.slice(-15,2) -- efective lenth=6+(-15)=-9
Rule: If start < 0 after calculation, JavaScript treats start as 0.
console.log(anotherString) 
output => ta */

//note***- must go through all the methods of strings at least once

const newStringOne="  Jawed  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://jawed.com/jawed%20athar"
console.log(url.replace('%20','-'))

console.log(url.includes('jawed'))