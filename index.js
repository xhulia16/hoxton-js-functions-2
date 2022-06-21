let letter = prompt("Insert a leter here")

const names = users.map(user => user.name)
console.log(names)

let namesContainingLetter = names.filter(function (name) {
    return (name.toLowerCase()).includes(letter.toLowerCase())
})

console.log(namesContainingLetter)

let counter=0
let timer=setInterval(function(){ 
        console.log(`Hi ${namesContainingLetter[counter]}`)
        counter++
        if (counter === namesContainingLetter.length){
            clearInterval(timer);}

    },2000)