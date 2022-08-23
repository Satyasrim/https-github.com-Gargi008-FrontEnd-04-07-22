/* console.log(this) //global object // window */
/* 
function multi(a,b){
    let multiply= a*b;
    console.log(`multiplication result - ${multiply}`)
    console.log(this) // global object // window object 
}

multi(5,11) */
/* 

1. the this keyword refers to the object it belongs to
2. depending on where it's being use , it's value changes

i) if used on it's own it refers to the global object
ii) if used in a normal funtion / regular function it refers to the global object 
iii) if we are in a method , this keyword refers to the object that it belongs to
*/

const vehicle = {
    company: 'Lamborghini',
    model: 'Huracan',
    mileage : `11.24 kmpl`,
    maxPowerInHP: 572,
    topSpeedInKmph: 372,
    start: function() {
        console.log("vroom vroom");
        console.log(this);
    }
}


console.log(vehicle.start());