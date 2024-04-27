//Singleton 
// when objects are declared as literals they are not as singleton 
//when constructor creates objects it is singleton(object.create)

//Object Literals 
const JsUser  =  {
    name:"Tanya",
    age: 21,
    location:"Noida",
    gmail:"xxx@gmail.com",
    isloggedin:false
}
console.log(JsUser.gmail)// this is actually a wrong method to access the element

