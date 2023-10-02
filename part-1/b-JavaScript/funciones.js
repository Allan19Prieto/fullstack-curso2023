// Funciones

// Funciones de flecha
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 +p2
}

const result = sum(1, 5)
console.log(result)

// en caso de un solo parametro
const square = p => {
    console.log(p)
    return p * p
}

// Si la función solo contiene una expresión, entonces las llaves mo son necesarias
const square2 = p => p*p

// Ejempo: cuando se usa el metodo map, es comun su uso
const t = [1, 2, 3]
const squared = t.map(p => p*p)
console.log(squared) // salida t es ahora [1, 4, 9]

// Declaración de función
function product(a, b) {
    return a * b
}

const resul = product(2, 6)
console.log(resul) // resul is 12

// expresión de función
const avarage = function(a,b) {
    return (a+b) / 2
}

const res = avarage(2, 5)
console.log(res) // res is 3.5