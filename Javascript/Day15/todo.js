let input= document.querySelector("#userinput")
let btn=document.querySelector("#btn")
let mytodos=document.querySelector(".mytodos")

btn.addEventListener("click",function(){

    let para=document.createElement("p")
    para.classList.add("para")
    para.innerText=input.value;
    mytodos.append(para)
    input.value=""

    para.addEventListener("click",function(){
        para.style.textDecoration="line-through"
    })

    para.addEventListener("dblclick", function() {
      /*   para.remove(); */
      mytodos.removeChild(para)

});







})