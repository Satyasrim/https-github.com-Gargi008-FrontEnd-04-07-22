//JS is single threaded
console.log("hey I am first console")
//webapi - settimeout is webapi 
//browser -- timer 

//browser will keep track of time or in browser we have timer that keeps track of time
//once time is over
//browsers tells that hey times up! u pls run the callback now


//how asynchronous callbacks work?
alert("helloo")
window.setTimeout(()=>{
    console.log("hey I will come after 3 secs")
},3000)

console.log("hey I am third console")


