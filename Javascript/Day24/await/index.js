//we use await keyword inside an async function

/* function user(){
  return axios.get('https://reqres.in/api/users')

}

user().then((response)=>{
  console.log(response)
}) */


async function user(){
  console.log("before" )//
  const response= await axios.get("https://reqres.in/api/users") // returns u a promise
  // the way await works -
  // this will pause the execution of the function while it is waiting for the promise to get either resolved or rejected
  console.log(response.data)//
  console.log("after")
}

user()