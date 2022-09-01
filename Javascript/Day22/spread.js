//spread

//1 function calls 
//2 array literals
//3 object literals

//1. spread expands an iterable (array , string , etc ..) into a list of arguments
/* function myFriends(a,b,c,d,e){
    console.log('a',a)
    console.log('b',b)
    console.log('c',c)
    console.log('d',d)
    console.log('e',e)
}
const friends=["Shivam","Lalith","Ram","Rajesh","Madhan"]

myFriends(...friends)

const myName="Gargi"
myFriends(...myName) */

//2 array literals
// spread will create a new array using an existing array. 
//it spreads the elements from one array to a new array.

const myNum=[ 100, 500, 300, 200, 400 ]
const myfriends=["Shivam","Lalith","Ram","Rajesh","Madhan"]
const myalpha = ['a', 'b', 'c', 'd', 'e', 'f'];


const newArr=[...myfriends,...myalpha,...myNum,"hello"]
/* const newArr=[...myNum,...myfriends,...myalpha,"hello"] */
console.log(newArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const duplicateFruits=[...fruits]
console.log(duplicateFruits)

if(fruits===duplicateFruits){
    console.log("yes same")
}else{
    console.log("not same")

}
/* const duplicateFruits1=fruits
if(fruits===duplicateFruits1){
    console.log("yes same")
}else{
    console.log("not same")

} */

// spread is making a clone , it creates a new array in memory  with a unique reference


//3. object literals
//it copies properties from one object into another object literal

/* 
const obj1 = {
    firstName: "Gargi",
    lastName: "Chakraborty",
    email: "gargichak636",
    age: 99
}
const person = {
	first_name : "Marty",
  	last_name : "Mcfly",
	born : 1968,
	died : 1933,
    lovers: ["Jennifer Parker","Baines McFly"]
};
const bike = {
    firstName : 'Honda Shine',
    manufacturer : 'Honda',
    engineCapacity : '125cc',
    }

const newObj={
    ...bike,
    ...obj1,
    ...person,
    
}
console.log(newObj)

/* console.log([...bike]) //error comes */
console.log(Math.max(...[2,4,7]))//7
console.log(Math.max(...bike))//TypeError: Found non-callable @@iterator */








