//prototype
//prototypes are template objects
//prototype has multiple methods

//js is not class nased object oriented programing language
//js is proptotype based object oriented programming language
console.log("Gargi")

String.prototype.dance= function(){
  return `uhhhh , ${this.toUpperCase()} is dancing`
}
String.prototype.sing= function(){
  return `uhhhh , ${this.toUpperCase()} is sing`
}
"Gargi"
"Gargii"
"Gargiii"


console.log('gargi'.dance())
console.log('a'.dance())
console.log('b'.dance())
console.log('c'.dance())

const arr=[1,2,3,4,5]
const arr1=[1,2,3,4,5,8]
const arr2=[1,2,3,4,5,9]


/* Array.prototype.pop=function(){
  return `sorry I will not pop ur element , not the the mood right now`
} */
Array.prototype.shivam=function(){
  return `hey I am shivam`
}
const a=arr.shivam()//popped elemet
console.log(a)
console.log(arr1.shivam())

//constructor

//car object

//object literal syntax

/* let car={
  model : "BMW",
  color:"red",
  speed:150,
  mileage:10,
  horsepower:40,
  wheels:4,
  running:function(){
    console.log("my car is running")
    console.log(this)
  }
}

console.log(car) */

//constructorsobjects which are defined with the constructor alloes us 
// to create multiple instances of the object


// this is the car constructor function
function Car(brandName,speed,color){
  console.log(this)
  this.brand=brandName
  this.speed=speed
  this.color=color
  this.running=function(){
    console.log("bhaag milkha bhaag")
  }
}

//u cam create an object from this car , hre car is like a blueprint
//new keyword u can create an object instance
//object instances
let car1= new car("Marcedes", 150,"red")
let car2= new car("BMW", 140,"red")
let car3= new car("Audi", 180,"red")

console.log(car1)
console.log(car2)
console.log(car3)
car1.running()
car3.running()





