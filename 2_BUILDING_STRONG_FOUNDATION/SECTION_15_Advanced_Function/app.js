// Pure Function
function add(num1, num2) {
    return num1 + num2;
}

// function sendDataToServer() {} // Predictable Side Effect

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// Impure Function
function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

// Impure Function
function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum; // Side Effect
    return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

// Impure Function // Array is Reference Value
function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

// Factory Function // Clousers
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier);
        return amount * tax * multiplier;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Max';

function greetUser() {
    // let name = 'Anna';
    console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manue';

greetUser();


// Recursion (재귀)
// function powerOf(x, n) {
//     let result = 1;
    
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// Recursion (재귀)
function powerOf(x, n) {

    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);

    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)) // 2 * 2 * 2

const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manuel',
            friends: [
                {
                    name: 'Chirs',
                    friends: [
                        {
                            name: 'Hari'
                        },
                        {
                            name: 'Amilia'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
}

function getFriendNames(person) {
    const collectedNames = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
    }

    return collectedNames;
}

console.log(getFriendNames(myself));