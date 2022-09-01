const grandpa=document.querySelector(".grandpa")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
const username=document.querySelector(".username")
//bubbling
//Bubbling means that the event propagates from the item that was clicked (the child)
// up to all its parent tree, starting from the nearest one.
//capturing


username.addEventListener("keypress",(e)=>{
    console.log(e)
    /* if(e.code=="Enter"){
    console.log("user clicked on enter") */
    if(e.keyCode==97){
        console.log("user clicked on 'a'")
    }

})



//if the user clicks on enter

//create a li


/* document.addEventListener("click",()=>{
    console.log("Document")
},)
grandpa.addEventListener("click",(e)=>{
    console.log("grandpa")
},{capture:true})

parent.addEventListener("click",(e)=>{
    console.log("parent")
})
child.addEventListener("click",e=>{
    console.log("child")
})
 */


/* const newDiv = document.createElement("div");
newDiv.textContent = "New Div";
document.body.append(newDiv);
newDiv.addEventListener("click", () => {
  setInterval(() => {
    console.log("Hi");
  }, 1000);
});
//memory leak
const btn = document.createElement("button");
btn.textContent = "Remove New Div";
document.body.append(btn);
btn.addEventListener("click", () => {
  newDiv.remove();
}); */