let score="33"

console.log(typeof score)
//or
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //output - NaN when score="33abc"
/* for line 7,8,9
when score=null
output- line3=object, line8=number , line9=0

when score=undefined
output- line3=undefined, line8=number, line9=NaN

when score=true/false (boolean value)
output- line3=boolean, line8=number, line9=1/0
*/

let isLoggedIn=1

let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(booleanIsloggedIn)

// 1=> true; 0=> false
// "" => false
//"Athar" => true

let someNumber=33
let stringNumber=String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

//************* Operations *****************

let value=5
let negValue=-value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3); // two raise to power 3
//console.log(2%3);

let str1="hello"
let str2=" Athar"

let str3=str1+str2
console.log(str3)
