//5! = 5*4*3*2*1
//n!=n*(n-1)*(n-2).......*1

const num=6
/* const num=prompt("Enter the no to calculate factorial") */
if(num<0){
    console.log("heyy , pls enter a positive no")
}
else{
    let fact=1;
    for(let i=1; i<=num;i++){ //1,2,3,4
        fact=fact*i 
        // 1*1 // 1
        //1*2//2
        //2*3//6
        //6*4//24

    }
    console.log(fact)
}

