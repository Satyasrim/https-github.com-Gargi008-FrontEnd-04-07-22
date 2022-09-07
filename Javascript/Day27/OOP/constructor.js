//constructor functions

function Color(r,g,b){
    
    console.log(this)
    this.r=r;
    this.g=g;
    this.b=b;
  /*   this.rgb=function(){
        return`----rgb(${this.r},${this.g},${this.b})`
    } */
  
}
Color.prototype.rgb=function(){
    console.log("this is my 'this'",this)
/*     const {r,g,b}=this */
    return `-----rgb(${this.r},${this.g},${this.b})`
}
const myColor= new Color(45,78,120)
console.log(myColor.rgb())


const myColor1= new Color(45,78,120)
console.log(myColor1)
const myColor2= new Color(45,78,120)
console.log(myColor2)

console.log(myColor1.rgb===myColor2.rgb) //false


console.log("hello".slice==="bye".slice) //true


//new operator
//it creates a blank object