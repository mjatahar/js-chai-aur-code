// const tinderUser= new Object()   --singleton object

const tinderUser={}   //non singleton object

tinderUser.id="420"
tinderUser.name="aloo"
tinderUser.hobby="kalesh"


//console.log(tinderUser)

const alsiUser={
    email: "aalsi@gamil.com",
    fullname:{
        userfullname:{
            firstname:"alsi",
            lastname:"aloo"
        }

    }
}

console.log(alsiUser.fullname.userfullname.firstname)

//merging two or more objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3)
const obj3={...obj1,...obj2,...obj4}
console.log(obj3)

const Users=[
    {
        id:1,
        email:"alana@gmail.com"
    },
    {
        id:2,
        email:"falana@gmail.com"
    },
    {
        id:3,
        email:"dhimkana@gmail.com"
    },
]

Users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)); // ***Important
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('achievemnt'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh",
}
//course.courseInstructor

const {courseInstructor}=course
console.log(courseInstructor)

//JSON
//{
 //   "name":"Athar";
//    "coursename":"JS Hindi";
 //   "price":"free"
    
//}