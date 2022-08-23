//color picker

const colors=["violet","indigo","blue","green","yellow","orange","red"]
/* for (let i of colors){
    console.log(i)
} */


const h1=document.querySelector("h1")
const container=document.querySelector(".container")

/* 
const colorChanger= function(){
    h1.style.color= this.style.backgroundColor
} */

for (let color of colors){//["violet","indigo","blue","green","yellow","orange","red"]
    const colorbox=document.createElement("div")
    colorbox.style.backgroundColor=color;
    colorbox.classList.add("box")
    container.append(colorbox)
    colorbox.addEventListener("click", () => {
        h1.style.color = color;
    })
   /*  colorbox.addEventListener("click",colorChanger) */


}

