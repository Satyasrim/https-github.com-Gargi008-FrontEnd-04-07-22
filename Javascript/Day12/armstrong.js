//153
// 1^3 + 5^3 + 3^3
//1+125+27= 153

//9474 
//

/* xyz= x^3 + y^3 + z^3
abcd= a^4 + b^4 +  c ^ 4 + d^ 4 */


const originalNum= 1634
const digit=String(originalNum).length
let temporary=originalNum;
let totalSum=0

while(temporary>0){ // 153 // 15 //1
    let remainder= temporary%10; //3 // 5 //1
    totalSum += remainder ** digit; //3^3 + 5^3 + 1^3 
    temporary=parseInt(temporary/10); //15 //1
}

if(totalSum== originalNum){
    console.log("armstrong number")
}
else
{
    console.log("not armstrong number")
}


