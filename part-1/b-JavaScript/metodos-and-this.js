// definiendo propiedades que son funciones
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function(){
        console.log('My name is ' + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}

// Se pueden agregar incluso luego de la creación de objetos
arto.growOld = function() {
    this.age += 1
}

console.log(arto.age) // 35
arto.growOld()
console.log(arto.age) // 36

arto.doAddition(1, 4) // 5

// referencia de Metodo
const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25

// En el metodo gree el this puede desaparecer cuando se hace una llamada al metodo con
// algun tiempo de espera
setTimeout(arto.greet, 1000) // Pierde la pista del this, ya no va a saber a donde apunta

/* Como se mencionó, el valor de this en JavaScript se define en función de cómo se llama 
al método. Cuando setTimeout llama al método, es el motor JavaScript el que realmente llama 
al método y, en ese punto, this se refiere al objeto global.

Existen varios mecanismos mediante los cuales se puede conservar el this original. 
Uno de ellos es usar un método llamado bind:
*/

// bind para conservar el this
setTimeout(arto.greet.bind(arto), 1000) // this esta abligado a apuntar a arto en esta nueva función
