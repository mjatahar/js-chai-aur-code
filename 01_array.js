const myArr=[0,1,2,3,4,5,true,"Hitesh"] //elements different types ke bhi ho skte hain
//array in js is resizable

const myHeros=["hulk","thor","batman"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

//Array mathods
myArr.push(6)
myArr.pop()

myArr.unshift(9) //[9,0,1,2,3,4,5,trye,'Hitesh',6] //👉 unshift() adds one or more elements to the beginning of the array.
myArr.shift() //delete elemnt from start
console.log(myArr)

console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(9)) //-1
console.log(myArr.indexOf(3))

const newArr=myArr.join()
console.log(myArr) // [ 0, 1, 2, 3, 4, 5, true, 'Hitesh' ]
console.log(newArr) // 0,1,2,3,4,5,true,Hitesh
console.log(typeof newArr) //String

//Slice & Splice

console.log("A",myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)
const myn2=myArr.splice(1,3)

console.log("C",myArr)
console.log(myn2)


/*************************Array property************************************ */

/**n JavaScript, an array is resizable, meaning:

You can change its size (add or remove elements) at any time, even after it’s created.

Unlike some programming languages (like C, C++, or Java) where arrays have a fixed size,
JavaScript arrays can grow or shrink dynamically. */

//🧠 Example 1: Expanding an Array
let fruits = ["apple", "banana"];
console.log(fruits); // ["apple", "banana"]

// Add more items
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]

// Add item directly by index
fruits[3] = "orange";
console.log(fruits); // ["apple", "banana", "mango", "orange"]

//🧠 Example 2: Shrinking an Array

let numbers = [10, 20, 30, 40];
numbers.pop(); // removes last element
console.log(numbers); // [10, 20, 30]

/**🧠 Example 3: Changing length manually

You can also directly change the .length property: */
let arr = [1, 2, 3, 4, 5];
arr.length = 3;  
console.log(arr); // [1, 2, 3] → last two items removed

arr.length = 6;
console.log(arr); // [1, 2, 3, <3 empty items>]

