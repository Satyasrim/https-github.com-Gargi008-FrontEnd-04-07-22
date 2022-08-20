//append
//vs.
//appendChild

//two methods for adding elements into ur DOM

//append
//1. add a node object
//2. DOMString

const content=document.body;
const oneMoreDiv=document.createElement("div")
content.append("heyaaa let's dance") 
content.append(oneMoreDiv)


const parent=document.createElement('div')
const child=document.createElement('h1')
const child1=document.createElement('h1')
const child2=document.createElement('h1')
const parentAppend=parent.append(child,child1,child2) //adding child to parent
const childAppend=content.append(parent) //adding parent body */
/* console.log(parentAppend)
console.log(childAppend)

//appendChild
//1. add a node object
//2. DOMString (can't add)
//
/* const parentAppendChild=parent.appendChild(child)
const childAppendChild=content.appendChild(parent) 
console.log(parentAppendChild)
console.log(childAppendChild)
 */
//imp
//append does not have a return value
//appendchild returns the node object which was appended 

//content.appendChild("heyaaa let's dance")  // can't add string using append chil
//with append  u can add multiple items
//with appendchild u can add only one item , first one is taken , rest are ignored





