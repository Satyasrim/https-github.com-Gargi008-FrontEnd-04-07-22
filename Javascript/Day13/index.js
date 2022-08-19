//DOM - Document Object Model

// structured representation of the HTML document
//document object - always on the top of my dom tree
// it is the entry point of ur dom tree
//each and every element of the html doc is a node inside the dom tree
//inside my dom tree every element is an object


/* const grand= document.getElementById("grandpaaid")
const parent= document.getElementById("parentid")
const child= document.getElementById("childid") */
const grand= Array.from(document.getElementsByClassName("grandpa"))
const parent= Array.from(document.getElementsByClassName("parent")) //4 elemnts
const child= Array.from(document.getElementsByClassName("child"))
console.log(grand)
console.log(parent)
console.log(child)


parent.forEach(myColor)


function myColor(val){
    val.style.backgroundColor="aqua"
   /*  val.style.color="red" */
}
/* myColor(parent) */




































/* console.log("Hello from the other side!!")
let myDom= window.document;
myDom=window.document.body;
/* myDom=window.document.head; 
console.log(typeof myDom)
console.log(myDom) */