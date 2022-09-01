/* function myName(){
  console.log("heyaaa m Gargi")
} */

//it is an asynhronous function

//asynchrous functions r nice syntactic sugar for promises

//it gives u a nice and easy syntax for writing promises

//write async keyword before myName and it becomes an asynchronous function
//now this func will return a promise


/* async function myName(){
  return "ice creame"
}


myName().then((data)=>{
  console.log("my promise got resolved , hehe I got " ,data)
})
 */


/* function addition(a,b){
  return new Promise((resolve,reject)=>{

    if( typeof a !== 'number' || typeof b!== 'number'){
      reject("heyyy user , a and b should be numbers, wrong input")
    }
    resolve(a+b)

  })
} */



async function addition(a,b){
  if( typeof a !== 'number' || typeof b!== 'number'){
    throw 'wrong input'
  }
  return a+b

}

addition(5,9)
.then((data)=>{
  console.log("my promise is resolved",data)
})
.catch((error)=>{
  console.log("promise is rejected",error)
})










