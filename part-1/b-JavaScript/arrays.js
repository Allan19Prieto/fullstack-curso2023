const t = [1, -1, 3]

t.push(5)

console.log(t) // Todo el array
console.log(t.length) // La cantidad de datos en el array
console.log(t[0])


let num = 0
t.forEach( value => {
    console.log(`Valor ${num} --> ${value}`)
    num +=1
})

// Usando concat
const t2 = t.concat(5)

console.log(t)
console.log(t2)

// Uso del método map
const m1 = t.map(value => value * 2)
console.log(m1)

// Puede transformarlo en algo diferente
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

// asígnacion de desastructuración
const [first, second, ...rest] = t

console.log(first, second)
console.log(rest)