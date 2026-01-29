//singleton-made in constructor method
//Object.create // constructor method

//object literals
const mySym=Symbol("myKey1")
const JsUser={
    name:"Athar", // name is auto atic consdier as string
    "full name": "Athar Jawed", // is full name ko .full length karke kabhi access kar hi nhi skte
    age:22,
    [mySym]:"myKey1",
    location:"Noida",
    email:"mjatahar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

//to change the value

JsUser.email="mjathar700@gmail.com"
//to freeze any object
//Object.freeze(JsUser)

//to call a function in object

JsUser.greeting=function(){
    console.log("namaste")
}

JsUser.greetingTwo=function(){
    console.log(`namaste ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())