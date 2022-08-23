const superHeros=["Shaktiman","Ironman","SuperMan","Hulk","Captain America","Doctor Strange","Thor"]
const movies=["wake up sid","Znmd","Talwar"]
const cars =["bmw","Audi","Toyota"]
const fruites=["mango","apple","orange","pineapple"]
const solarSystem =[ 'Sun', 'mercury', 'Venus', 'Earth']
const planets = [ "earth","mars","jupiter","saturn","venus"]

/* const newBigArray=[...movies,...cars,...fruites,...solarSystem,...planets]
console.log(newBigArray)
console.log(movies) */
/* const shakti = superHeros[0]
const iron = superHeros[1]
const superman = superHeros[2]

console.log(shakti)
console.log(iron)
console.log(superman) */

//destructuring

// short syntax to "unpack"

/* const [shakti,,superman,,captain]=superHeros // array destructuring
console.log(shakti)
/* console.log(iron)
console.log(superman)
console.log(captain) */
/* const [shakti,,superman, ...remainingheros ]=superHeros // array destructuring
console.log(superman)
console.log(shakti) */

/* console.log(iron) */
/* console.log(superman)
console.log(captain) */
 //console.log(remainingheros)

/* const duplicateHeros=[...superHeros]
console.log(duplicateHeros)
console.log(superHeros) */



const superHero={
    heroname:"Flash",
    speedRunner:"light",
    age:25,
    comicUniverse: "DC"

}
//object destructuring

let {heroname: myHero,age : myHeroage, ...otherdetails}=superHero
/* const {heroname: myHero,age : myHeroage,speedRunner: speed,comicUniverse: universe}=superHero */

console.log(myHero)
myHero = "dummy"
console.log(myHero)
/* console.log(speed) */
console.log(myHeroage)
/* console.log(universe) */
console.log(otherdetails)
console.log(superHero)

