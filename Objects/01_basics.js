//Singleton 
// when objects are declared as literals they are not as singleton 
//when constructor creates objects it is singleton(object.create)

//Object Literals 

const mysym = Symbol("key1")
const JsUser  =  {
    name:"Tanya",
    "full name":"Tanya Singh",// this is no way to acces this with dot operator thats why second option for accessing is better
    age: 21,
    [mysym]: "mykey1",
    location:"Noida",
    gmail:"xxx@gmail.com",
    isloggedin:false
}
console.log(JsUser.gmail)// this is actually a wrong method to access the element
console.log(JsUser["gmail"])// this is the correct and better way to define 
//console.log(JsUser.mysym)//WITH THIS DOT OPERATOR THIS IS NO PROBLEM WITH THE ACCESS BUT WHILE PRINTING Data type it will show string rather than symbol 
//console.log(typeof JsUser.mysym)// symbol keyed property can't be accessed using dot notation
// Thats why it is used with square brackets only 
console.log(JsUser[mysym])
console.log(typeof JsUser[mysym])
console.log(JsUser)
