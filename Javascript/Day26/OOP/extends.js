class Pet{
    constructor(name,nickName){
        console.log("hiii")
        this.name=name;
        this.nickName=nickName
    }

    call(){
        return `my ${this.nickName} is cute`
    }
}


//cat 
//dog


/* parent --> Pet
child ---> cat and dog */

class Cat extends Pet{
    constructor(name,nickName,sound){
        console.log("Cat")
        super(name,nickName)
        this.sound=sound
    }
    greet(){
        return `my ${this.nickName} is cute`
    }
}
class Dog extends Pet{
    constructor(name,nickName,sound){
        console.log("dog")
        super(name,nickName)
        this.sound=sound
    }
    greet(){
        return `my ${this.nickName} is cute`
    }
}

const newPet=new Pet("rabbit","lily")
console.log(newPet.call())
const newcat=new Cat("Sundar","billa")
console.log(newcat.greet())
const newdog=new Dog("Peter","tommy")
console.log(newdog.greet())