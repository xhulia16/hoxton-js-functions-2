let letter = prompt("Insert a leter here")

const names = users.map(user => user.name)
console.log(names)

let namesContainingLetter = names.filter(function(name){
    return (name.toLowerCase()).includes(letter.toLowerCase())
})

console.log(namesContainingLetter)
