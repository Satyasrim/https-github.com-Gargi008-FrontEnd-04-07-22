

//dom 
let correctAnswer=[]

const response=fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")

response.then((res)=>res.json())
.then((responseData)=>{
    const formContainer= document.createAttribute("form")
    quizContainer.appendChild(formContainer)

    responseData.map((item,i)=>{
       
        correctAnswer.push(item.options[item.answer-1])

        const question=document.createElement("h2")
        question.innerHTML=`Q${item.id}. ${item.question}`
        formContainer.append(question)

        item.options.map((option,j)=>{
            const quizOption= document.createElement("input")
            quizOption.type="radio"
            quizOption.required=true
            quizOption.value=option;
            const quizLabel=document.createElement("Label")



        })


    })

})


//btn

//append to ur formm

()
btn.addEventListener("click",function(e){
    e.preventDefailt();


})


for(let i=0;i<correctAnswer.length;i++){
    if(correctAnswer[i]===givenAns[i]){
        score=score+1;
    }
}