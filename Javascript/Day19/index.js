//call stack 
//JS callstack is a mechanism to keep track of the mutiple function calls
//js engine uses callstack to mnage the execution content
//how js works???????
/* var myname="gargi"
function add(a,b){
    return a+b; //5+7=12
}
function multiply(x,y){
    return add(x,y)*11;//12*11
}
console.log(multiply(5,7)); */

const multiply=(x,y)=>x*y;
const square=(x)=>multiply(x,x);
const isRightAngleTriangle=(a,b,c)=>{
    return square(a)+square(b)===square(c);
}
isRightAngleTriangle(3,4,5)



