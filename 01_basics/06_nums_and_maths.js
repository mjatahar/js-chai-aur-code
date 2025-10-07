const score=400

const balance= new Number(100)
//console.log(balance); //=>[Number: 100]

//console.log(balance.toString())//=>100
//console.log(balance.toString().length)//=>3

//console.log(balance.toFixed(2)); //=>100.00

const otherNumber=123.8966

//console.log(otherNumber.toPrecision(3));

const hundreds=100000
//console.log(hundreds.toLocaleString('en-IN'));

//**************** Maths***************** */

console.log(Math) //=> Object [Math] {}
console.log(Math.abs(-4)) //=> 4
console.log(Math.round(4.3)) //=> 4
console.log(Math.ceil(4.2)) //=> 5  top value pe round off karega
console.log(Math.floor(4.3)) //=>4 bottom value pe round off karega
console.log(Math.min(4,3,2,6,8,12))
console.log(Math.max(4,3,2,6,8,12))