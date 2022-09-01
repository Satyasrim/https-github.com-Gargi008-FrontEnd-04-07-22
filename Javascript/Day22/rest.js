//argument object
/* function sum(){
    let totalSum=0;
    for(let i=0;i<arguments.length;i++){
        totalSum +=arguments[i]
    }
    return totalSum;
}
const result=sum(6,7,8,9)
console.log(result)
 */
/* function sum(){
    const argumentArray=[...arguments]
    return argumentArray.reduce((totalSum,curVal)=>{
        return totalSum+=curVal
    })

}
const result=sum(6,7,8,9)
console.log(result) */


//rest 

function sum(...nums){/* 
    console.log(nums) */
    return nums.reduce((totalSum,curVal)=>{
        return totalSum+=curVal
    })
}

const result=sum(6,7,8,9)
console.log(result) 

//rest - it collects all the arguments and puts it into an array

function myFullName(fname,lname,...others){
    console.log("first",fname)
    console.log("last",lname)
    console.log("others",...others)

}
myFullName("Gargi","Chakraborty","abc","def","xyz")
function Satya(a,b){
    console.log(a+b)
    
}
const n=Satya(2,3)
console.log(n)