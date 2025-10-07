// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null>0); //=> false
console.log(null==0); //=> false
console.log(null>=0); /*=>True becuase comparison operator convert 
null into number i.e 0 but equalto operator doesnt do such things*/

console.log(undefined==0);//=>false
console.log(undefined>0);//=>false
console.log(undefined<0);//=>false
/* all the shitt!! from 7 to 17 is not preferable beacuse it doesnt always 
gives preffered output. Js does automatic conversion in these cases */

/* stric check (===) it not only check values but also stictly check thier 
data type  */

console.log("2"===2); //here "2" is not converted to number ans treated a string thaats why output is false