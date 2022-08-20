//DOM - Document Object Model

// structured representation of the HTML document
//document object - always on the top of my dom tree
// it is the entry point of ur dom tree
//each and every element of the html doc is a node inside the dom tree
//inside my dom tree every element is an object


/* const grand= document.getElementById("grandpaaid")
const parent= document.getElementById("parentid")
const child= document.getElementById("childid") */
//const grand= Array.from(document.getElementsByClassName("grandpa"))
/* const parent= Array.from(document.getElementsByClassName("parent")) //4 elemnts
const child= Array.from(document.getElementsByClassName("child"))

console.log(parent)
console.log(child)
const grand=document.getElementById("grandpaaid")

/* grand.forEach(myColor) 
function myColor(val){
    val.style.backgroundColor="aqua"
    val.style.color="red" 
}
myColor(grand)
myColor(parent) */
//queryselector



// select the children of the parent
/* const grand= document.querySelector(".grandpa")
const parent=Array.from(grand.children)
const parent1=parent[0]
const child1=parent1.children;
console.log(`child1${child1}`)
//parent.forEach(myColor)
myColor(child1[0])
function myColor(val){
    val.style.backgroundColor="maroon"
} */

// select the children of the parent
/* const grand= document.querySelector(".grandpa")
const child=document.querySelector(".child")
myColor(child)
function myColor(val){
    val.style.backgroundColor="pink"
}  */

//select the parent of the child
/* const child1= document.querySelector("#child1")
const parent1= child1.parentElement
const child3= document.querySelector("#child3")
const parent3= child3.parentElement
myColor(parent1)
myColor(parent3)
function myColor(val){
    val.style.backgroundColor="pink"
}  */


//select the grandparent of the child
/* const child1= document.querySelector("#child1")
const parent1= child1.parentElement
const grand= parent1.parentElement */

//select the grandparent of the child
const child3= document.querySelector("#child3")
const grand= child3.closest(".grandpa")
myColor(grand)
function myColor(val){
    val.style.backgroundColor="pink"
}  
//closest moves upward
//queryselector moves downwards to the closest child wrt the selected that u have passed

//siblings
/* const parent1= document.querySelector("#parent1");
const parent2=parent1.nextElementSibling
myColor(parent2.previousElementSibling)
function myColor(val){
    val.style.backgroundColor="pink"
}  */















































/* console.log("Hello from the other side!!")
let myDom= window.document;
myDom=window.document.body;
/* myDom=window.document.head; 
console.log(typeof myDom)
console.log(myDom) */