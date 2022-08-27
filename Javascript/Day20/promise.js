//callback hells
//promise
//gargi is making a promise
//if the promise is resolved -- Gargi kept the promise
//if the promise was not resolved - gargi failed to keep her promise

/* const jyotiWillGetIphone= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const marks=Math.random()*100;
        console.log(marks)
        if(marks>70){
            resolve()
        }
        else{
            reject()
        }
    },1000)
})
//if ur promise is resolved , in that case u go inside .then
jyotiWillGetIphone.then(()=>{
    console.log("Yayyy, Jyoti got an iphone")
})
jyotiWillGetIphone.catch(()=>{
    console.log(" Jyoti will get an iphone next time")

})
 */
//create a promise
//if condition is satisfied then promise will be resolved
//if ur promise is resolved then u will go inside the .then method.


const VisitMyWebsite= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const num=Math.random();
        console.log(num)
        if(num>0.8){
            resolve({positive:"yes I got it"})
        }
        else{
            reject({status:'404 error'})
        }
    },1000)
})
//if ur promise is resolved , in that case u go inside .then
VisitMyWebsite.then((response)=>{
    console.log(response.positive)
    console.log("yayyaaa I found my webpage")
})
VisitMyWebsite.catch((res)=>{
    console.log(res.status)
    console.log(" sry could not find")

})
