//factory function

//factory functions are functions tha create objects everytime it is called
/* rgb(0,0,0)
rgb(0,255,0)
rgb(255,0,0)
rgb(0,0,255)
#F98765
rgba(255,0,0,0.6)
rgb(255,78,98)
 */
function makeColor(r,g,b){ //255,9,8
    const color={} // empty object
    color.r=r//properties
    color.g=g
    color.b=b
    color.rgb=function(){
        console.log("this is my 'this'",this)
        return `rgb(${r},${g},${b})`
    }
    return color
}
//new objects created and along with it functions are recreated and added to the color objects
//every object has their unique copy of the function
const myColor1=makeColor(255,9,8)
console.log("first object",myColor1)

const myColor2=makeColor(255,90,80)
console.log("second object",myColor2)
const myColor3=makeColor(25,255,8)
console.log("third object",myColor3)
console.log(myColor1.rgb===myColor2.rgb) //false


console.log("hello".slice==="bye".slice) //true

//string.prototype.slice === string.prototype.slice