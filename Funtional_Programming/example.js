var animals = [
    { name: 'FluffyKins', species: 'rabbit' },
    { name: 'Caro' , species: 'dog' }
]

var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
var otherAnimls = animals.reject(isDog)

/*
var dogs = []
for (var i = 0; i < animals.length; i++ ){
    if (animals[i].species === 'dog') {
        dogs.push(animals[i])
    }
}*/