//hoisting
/* var a
console.log(a)
a= 11;
console.log(a) */


//hoisting -- it is a phenomena where u can access a variable even before u have 
//declared it

console.log(a)
var a=30;
console.log(a)

//Cannot access 'a' before initialization 

console.log(`multiply(x,y) -----> ${multiply(5,8)}`)
//function declaration
function multiply(x,y){
    return x*y
}
console.log(`multiply(x,y) -----> ${multiply1(3,8)}`)
//function expression
const multiply1 = function (x, y) {
    return x * y;
  };



//arrow
const multiply2= (x,y)=> x*y
console.log(`multiply(x,y) -----> ${multiply2(5,9)}`)




