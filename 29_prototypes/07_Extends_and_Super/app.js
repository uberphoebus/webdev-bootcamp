class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age); // super calls the constructor of the parent class
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOWWWW!!";
    }
}

class Dog extends Pet {
    bark() {
        return "WOOF!!";
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}

const monty = new Cat("Monty", 9);
console.log(monty);
console.log(monty.eat());

const wyatt = new Dog("Wyatt", 3);
console.log(wyatt);
console.log(wyatt.eat());
