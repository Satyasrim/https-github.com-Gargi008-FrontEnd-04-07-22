//xhr
//XMLHttpRequest

//get  - u r requesting data from a specified resourse
//post - u r sending the data to a server to create a resource


const getBtn=document.querySelector('#getBtn')
const postBtn=document.querySelector('#postBtn')

const userInfo=(method, url, data)=>{

    const promise=new Promise((resolve,reject)=>{
        //1. instantiate the object
        const xhr= new XMLHttpRequest();
        //2. open the object
        //method- http method - get or post
        xhr.open(method, url)
        //3.json
        xhr.responseType="json"
        if(data){
            xhr.setRequestHeader('content-Type','application/json')
        }

        //loading loading
        //readystate - 4
        //4. onload 
        xhr.onload=()=>{
            if(xhr.status >=400){
                reject(xhr.response)
            }else{
                resolve(xhr.response)
            }
        }
        xhr.onerror=()=>{
            reject("ohho rejected")
        }
        //5.send
        //convert js to json(JavaScript object notation) - JSON.stringify()
        //JSON.parse()
        xhr.send(JSON.stringify(data))
    })

    return promise;
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