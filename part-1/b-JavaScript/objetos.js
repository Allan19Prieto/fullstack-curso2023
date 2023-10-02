// Objetos
const object1 = {
    name: 'Allan Prieto',
    age: 24,
    education: 'JavaScript',
}
const object2 = {
    name: 'Web Application',
    level: 'intermendiante studies',
    size: 5,
}
const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)
const filName = 'age'
console.log(object1[filName])

// agregar propiedades aun objeto *sombre la marcha
object1.adress = 'Cachí'
object1['secret number'] = 12341

console.log(object1)