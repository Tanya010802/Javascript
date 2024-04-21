const myARR = [1,2,3,4,5,6]
const name = ["Ram","Shyam"]
const arr2 = new Array(1,2,3,4)
console.log(arr2);

//Array Methods 

myARR.push(6)
myARR.push(7)
myARR.pop()
myARR.unshift(9)
myARR.shift()
console.log(myARR.includes(9)); // here the answer comes in boolean type ie either true or false
console.log(myARR.indexOf(20));  // it will return -1 if element is not present in array
const newarr = myARR.join();// this joinsnand binds the aaray also it changes the array to string 
console.log(myARR);
console.log(newarr);


// Slice and splice  (Splice manipulates the original array while slice doesnt)
console.log("A ",myARR);
const myn1 = myARR.slice(1,3);
console.log(myn1);

console.log("B ", myARR);

const myn2  = myARR.splice(1,3);
console.log(myARR);
console.log(myn2);
