//axios
//external library

const getBtn=document.querySelector('#getBtn')
const postBtn=document.querySelector('#postBtn')
const getUser=()=>{
    axios.get("https://reqres.in/api/users").then(response=>{
        console.log("my response",response)
    })
}
const postUser=()=>{
    axios.post("https://reqres.in/api/users",{
        "name": "morpheus",
        "job": "leader",
}).then(response=>{
    console.log("response from post",response)
})
}
getBtn.addEventListener("click",getUser)
postBtn.addEventListener("click",postUser)