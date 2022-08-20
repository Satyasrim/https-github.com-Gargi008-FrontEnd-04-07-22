let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let content=document.querySelector(".content")

let myContent=`hellooooo <h1> helllooooo</h1> <p>hi, I am Gargi</p> 
<img width="300px" height="350px" src="https://images.pexels.com/photos/9377667/pexels-photo-9377667.jpeg" id="pic">


<h1>helllo guysss , Happy Janmashtami! </h1>

<div id="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quod excepturi, dolores culpa consectetur aliquam?</div>
<button id="iambutton">iambutton</button>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, esse magnam vitae dolorem sint assumenda veritatis vel quod commodi aliquam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, esse magnam vitae dolorem sint assumenda veritatis vel quod commodi aliquam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, esse magnam vitae dolorem sint assumenda veritatis vel quod commodi aliquam?</p>
<p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse id rem distinctio nostrum est ipsum cupiditate labore quos quae quasi quam velit deleniti dolorem expedita facere eveniet, beatae debitis saepe natus ducimus vel dolor consequatur? Dolor minus temporibus neque?</p>
<button id="btn" onclick="toggle()">Toggle</button>


 <ul>
    <li class="music">headphone</li>
    <li class="music">earphone</li>
    <li class="music">speaker</li>
 </ul>

 <form action="">
    <input type="text" placeholder="enter ur username">
    <input type="text" placeholder="enter ur password">
    <button>submit</button>
    

 </form>

 <section>
    <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
    </ul>
 </section>

`

btn1.addEventListener("click",()=>{
    content.innerText=myContent
})
btn2.addEventListener("click",()=>{
    content.innerHTML=myContent
})

