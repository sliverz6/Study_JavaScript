class Course {
    #price;

    get price() {
        return '$' + this.price ;
    }

    set price(value) {
        if (value <= 0) {
            throw 'Error';
        }
        this.#price = value;
    }

    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calulateValue() {
        console.log(this.length/this.#price);
    }

    outputSummary() {
        console.log(`Name: ${this.title}, Price: ${this.price}, Length: ${this.length}`);
    }
}

console.log(new Course('JavaScript Course', 63, 11000));
console.log(new Course('Node.js Course', 48, 12000));

const CSSCourse = new Course('CSS Course', 23, 11000);
CSSCourse.calulateValue();
CSSCourse.outputSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log('Publishing');
    }
}

const reactCourse = new PracticalCourse('React Course', 40, 11000, 8);
console.log(reactCourse);

const flutterCourse = new TheoreticalCourse('Flutter Course', 30, 12000);
flutterCourse.publish();