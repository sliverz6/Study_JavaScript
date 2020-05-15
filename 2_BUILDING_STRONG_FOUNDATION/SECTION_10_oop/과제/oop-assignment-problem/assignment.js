// 과제 1
// class Course {
//     constructor(title, length, price) {
//         this.title = title;
//         this.length = length;
//         this.price = price;
//     }
// }

// console.log(new Course('JavaScript', 614, 11000));
// console.log(new Course('Node.Js', 487, 15000));

// 과제2
class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculate() {
        const text = this.length / this.price;
        console.log(text);
    }

    summary() {
        console.log(`${this.title} is ${this.price} and ${this.length}`);
    }
}

const course = new Course('JavaScript', 619, 11000);
console.log(course.calculate());
console.log(course.summary());

// 과제3
class PracticalCourse extends Course {
    constructor(numOfExercies) {
        super();
        this.numOfExercies = numOfExercies;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log(this.title);
    }
}

const practicalCourse = new PracticalCourse();
const TheoreticalCourse = new TheoreticalCourse();