const func1=()=>{
    console.log("I am inside function 1 ")
    func2() // 5 sec
    console.log("I am inside function 1 after func2  ")
}

const func2=()=>{
    setTimeout(()=>{
        console.log("I am inside function 2")
    },5000)
}

func1()

