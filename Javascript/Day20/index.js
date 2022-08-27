//promise

//page request or fake request 

// it will tale 1 sec to resolve or reject my promise
/* const pageRequest =(url)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                //key : value
                '/users':[
                    {id:1,username:"Asha"},
                    {id:2,username:"Gargi"},
                ],
                '/about':"My about section",
                '/contact':"My contact us section"
            }
            const result=pages[url];
            if(result){
                resolve({status:100,result})
            }else{
                reject({status:404})
            }
        },1000)
    })

}
pageRequest("/users")
.then((res)=>{
    console.log("res.result",res.result)
    console.log("res.status",res.status)

})
.catch((res)=>{
    console.log("res.status",res.status)
}) */
const pageRequest =(url)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                //key : value 
                '/users':[
                    {id:1,username:"Asha"},
                    {id:2,username:"Gargi"},
                ],// res.result[0].id ---> 1
                '/users/1':{
                    id:1,
                    username:"Asha",
                    age:80,
                    location:"kolkata",
                    bestBlogId:9
                },
                '/users/2':{
                    id:2,
                    username:"Gargi",
                    age:79,
                    location:"Bangalore",
                    bestBlogId:11
                },
                '/blogs/9':{
                    id:9,
                    details:"I love blogging "
                },
                '/blogs/11':{
                    id:11,
                    details:"I love blogging too"
                },
                '/about':"My about section",
                '/contact':"My contact us section"
            }
            const result=pages[url];
            if(result){
                resolve({status:100,result})
            }else{
                reject({status:404})
            }
        },1000)
    })

}

/* pageRequest("/users")
.then((res)=>{
    const id= res.result[0].id;
    pageRequest(`/users/${id}`)
    .then((res)=>{
        const bestBlogId=res.result.bestBlogId
        pageRequest(`/blogs/${bestBlogId}`)
        .then((res)=>{
            console.log(res)
        })
    })

}) */

//promise chaining

/* .then()
.then()
.then() */

pageRequest("/users")
.then((res)=>{
    const id= res.result[0].id;
    return pageRequest(`/users/${id}`)
})
.then((res)=>{
    const bestBlogId=res.result.bestBlogId
    return pageRequest(`/blogs/${bestBlogId}`)

})
.then((res)=>{
    console.log(res)
})

