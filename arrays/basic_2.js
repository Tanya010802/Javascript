const fruits =  ["apple", "banana", "orange"];
const  colors = ["red","yellow","green"];
//fruits.push(colors);
//console.log(fruits);// array can take anythinjg as element here it takes array itself as element 
 

const all = fruits.concat(colors)
console.log(all);


const allll = [...fruits,...colors]
console.log(allll); //spread operator is used to spread the elements of one array into another array

const another_array = [1,2,3,4,[4,5,6,7,8],2,6,[1,2,[2,3,4]]]
const real = another_array.flat(Infinity);
console.log(real)


console.log(Array.isArray("Tanya"))
console.log(Array.from("Tanya"))
console.log(Array.from({name: "Tanya"})) // INTRESTING CASE FOR INTERVIEWS


let score1 = 100;
let  score2 = 90;
let score3 = 80;
console.log(Array.of(score1,score2,score3));