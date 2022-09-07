//class


//syntax is easier

class Color{
    //in class syntax u need to have the constructor , it will immediately run
    //whenever you instantiate a new object
    constructor(r,g,b){
        console.log(this)
        this.r=r
        this.g=g
        this.b=b
    }
    rgb(){
        return `rgb(${this.r},${this.g},${this.b})`
    }

}
const myColor1= new Color(45,78,120)
console.log(myColor1)
const myColor2= new Color(45,78,120)
console.log(myColor2)

console.log(myColor1.rgb===myColor2.rgb) //false


console.log("hello".slice==="bye".slice) //true
