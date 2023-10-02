// Similar a una clase, introducido en ES6
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    greet() {
        console.log('Hello my name is '+ this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const allan = new Person('Allan Priero', 24)
allan.greet()