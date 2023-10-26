var animals = [
    { name: 'FluffyKins', species: 'rabbit' },
    { name: 'Caro' , species: 'dog' },
    { name: 'Harold' , species: 'dog' },
    { name: 'Ursula' , species: 'cat' }
]

var names = animals.map(function(animal) {
    return animals.name
})

/*
var names = []
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
}*/

console.log(names);