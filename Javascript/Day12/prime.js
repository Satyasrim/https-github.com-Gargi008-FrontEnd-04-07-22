//a positive integer number that is divisible by 1 and itself


const num=-8
/* const num=pareseInt(prompt("Enter a number")) */
let isprime=true;

if(num==1){
    console.log("1 is neighter prime nor composite")
}
else if(num> 1){
    for(let i =2 ; i < num ; i++){
        if(num % i == 0){// if satisfied it means it has more than 2 factors
            isprime=false
            break;
        }
    }
    if(isprime){
        console.log("prime")
    }
    else{
        console.log("not prime")

    }
}
else{
    console.log("enter some positive no")
}

