//Singleton 
// when objects are declared as literals they are not as singleton 
//when constructor creates objects it is singleton(object.create)

//Object Literals 
const JsUser  =  {
    name:"Tanya",
    "full name":"Tanya Singh",// this is no way to acces this with dot operator thats why second option for accessing is better
    age: 21,
    location:"Noida",
    gmail:"xxx@gmail.com",
    isloggedin:false
}
console.log(JsUser.gmail)// this is actually a wrong method to access the element
console.log(JsUser["gmail"])// this is the correct and better way to define 
