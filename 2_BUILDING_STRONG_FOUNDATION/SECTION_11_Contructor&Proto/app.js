// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'Lee';

//     constructor() {
//         super();
//         this.age = 28;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

function Person() {
    this.age = 28;
    this.name = 'Lee';
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);
// const p2 = new p.__proto__.constructor();
// console.log(p2);

const course = {
    title: 'JavaScript - The Complete Guide',
    rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

// student.name = 'Lee';

// Object.defineProperty(student, 'progress', {
//     configurable: true,
//     enumerable: true,
//     value: 0.8,
//     writable: false,
// });

// console.log(student);

// course.printRating();