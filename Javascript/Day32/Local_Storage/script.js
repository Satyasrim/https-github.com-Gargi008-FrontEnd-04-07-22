/* const Gargi={
    surname:"Chakraborty",
    mail:"gargi@gmail.com"
}

const GargiString=JSON.stringify(Gargi)
console.log(GargiString,typeof(GargiString))


const check=Array.isArray(Gargi)
console.log("isArray?",check) */

//local Storage and Session Storage

/* localStorage.setItem("myName","Gargi") //key value pair
localStorage.setItem("myName1","a") //key value pair
localStorage.setItem("myName2","b") //key value pair
localStorage.setItem("myName3","c") //key value pair
const myNamee=localStorage.getItem("myName")
console.log(myNamee)
localStorage.getItem("myName1")
localStorage.getItem("myName2")
localStorage.getItem("myName3") */

//localStorage.clear()

const addBtn=document.getElementById('add')


const notes=JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.forEach(note=>{addNewNote(note)})
}
addBtn.addEventListener("click",addNewNote())
function addNewNote(text=''){

    const note= document.createElement("div")
    note.classList.add('note')

    note.innerHTML=`
    <div class="tools" >
    <button class="edit"> <i class="fas fa-user-edit"></i>
    </button>
    <button class="delete"><i class="fas fa-trash"></i>
    </button>
    </div>
    <div class="main ${text?"":"hidden"}"> </div>
    <textarea class="${text?"hidden":""}"></textarea>
   
    `

    const editBtn= note.querySelector('.edit')
    const deleteBtn=note.querySelector('.delete')
    const textArea=note.querySelector('textarea')
    const main=note.querySelector(".main")

    textArea.value= text
    main.innerHTML= marked(text)
    textArea.addEventListener("input",(e)=>{
        const {value}= e.target
        main.innerHTML= marked(value)
        updateLocalStorage()

    })

    deleteBtn.addEventListener("click",()=>{
        note.remove()
        updateLocalStorage()

    })
    editBtn.addEventListener("click",()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

    })

    document.body.appendChild(note);

}



function updateLocalStorage(){
    const notesText= document.querySelectorAll("textarea")
    const notes=[]

    notesText.forEach(note=>{
        notes.push(note.value)
    })

    localStorage.setItem("notes",JSON.stringify(notes))
    
}














