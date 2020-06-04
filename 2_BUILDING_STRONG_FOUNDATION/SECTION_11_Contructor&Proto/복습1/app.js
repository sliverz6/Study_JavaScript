class AgedPerson {

    printAge() {
        console.log(this.age);
    }
}

class Person {
    name = 'Lee';

    constructor() {
        // super();
        this.age = 28;
        // this.greet = function() { ... }
    }

    // greet = () => {
    //     console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    // }

    greet() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

// function Person() {
//     this.age = 28;
//     this.name = 'Lee';
// }

// Person.prototype.greet = function() {
//     console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
// };

// Person.describe = function() {
//     console.log('Creating persons...');
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype);

const p = new Person();
const p2 = new Person();
p.greet();
console.log(p);

const button = document.getElementById('btn');
button.addEventListener('click', p.greet.bind(p));