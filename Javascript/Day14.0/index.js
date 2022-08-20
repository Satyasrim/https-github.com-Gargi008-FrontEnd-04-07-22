/* const li=document.getElementsByTagName('li') */
const li=document.querySelectorAll('li')
console.log(li)

/* for (let i=0;i<li.length;i++){
    li[i].innerText="okay we r having a great time!"
} */

for(let i of li){
    i.innerText="yuhuuuu"
}

//toggle feature

function toggle(){
    let para=document.querySelector(".para")
    if(para.style.display !== "none"){ // it means my para is visible
        para.style.display="none" // now I am hiding it
    }else{
        para.style.display="block"; // show my paragraph

    }

}

const para1=document.querySelector("#para1")
/* para1.addEventListener()//2 parameters  */
//1. event name
//2. callback function

para1.addEventListener("mouseover",function hoverYourMouse(){
    console.log("ohhh u hovered on me huhhh!!!!")
})
para1.addEventListener("mouseout",function hoverYourMouse(){
    console.log("The event occurs when a user moves the mouse pointer out of an element, or out of one of its children")
})
para1.addEventListener("mouseup",function mouseup(){
    console.log("The event occurs when a user releases a mouse button over an element")
})
para1.addEventListener("dblclick",function dblclick(){
    console.log("The event occurs when the user double-clicks on an element")
})
para1.addEventListener("mouseup",function hoverYourMouse(){
    console.log("The event occurs when a user releases a mouse button over an element")
})
para1.addEventListener("mouseup",function hoverYourMouse(){
    console.log("The event occurs when a user releases a mouse button over an element")
})
const iambutton= document.querySelector("#iambutton")

iambutton.addEventListener("click",function iAmClicked(){
    console.log("Yaaay , someone clicked me!!!!")
})





