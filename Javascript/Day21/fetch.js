//fetch
//The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
//It returns a Promise that resolves to the Response to that request 
//— as soon as the server responds with headers — even if the server response is an HTTP error status.
const getBtn=document.querySelector('#getBtn')
const postBtn=document.querySelector('#postBtn')

const userInfo=(method,url,data)=>{
    return fetch(url,{
        method:method,
        headers: data?{'content-Type':'application/json'}:{},
        body:JSON.stringify(data)
    }    
    ).then(response=>{
        if(response.status>=400){
           console.log("res",response.status)
        }
        return response.json()
    })
}

const getUser=()=>{
    userInfo("GET","https://reqres.in/api/users").then(responseData=>{
        console.log(responseData)
    })
}

const postUser=()=>{
    userInfo("POST","https://reqres.in/api/users",{
            "name": "morpheus",
            "job": "leader",
    }).then(responseData=>{
        console.log('hey this is the response from post',responseData)
    }).catch(err=>{
        console.log(err)
    })
}


getBtn.addEventListener("click",getUser)
postBtn.addEventListener("click",postUser)



