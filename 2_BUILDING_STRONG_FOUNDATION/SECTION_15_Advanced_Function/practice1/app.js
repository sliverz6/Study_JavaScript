// Pure Function
function add(num1, num2) {
    return num1, num2;
}

console.log(add(1, 2));

// Impure Function
function addRandom(num) {
    return num + Math.random(); // Can't Predict
}

console.log(addRandom(5));

// Impure Function 2 
const previousValue = 1;

function addMoreNumber(num1, num2) {
    const sum = num1 + num2;
    previousValue = sum; // Side Effect!
    return sum;
}

// Impure Function 3 (For Reference Value)
const hobbies = ['Sports', 'Coding'];

function printHobbies(h) {
    h.push('NEW HOBBY'); // Array is Reference Value
    console.log(h);
}

printHobbies(hobbies);

// Factory Function

function createTaxCalculator(tax) { // Clousers
    function calculateTax(amount) {
        return amount * tax; // Clousers // Tax value is rememebered by function evironment
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// Recursion
// function powerOf(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

function powerOf(x, n) {

    if (n === 1) {
        return x;
    }

    return x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

// Recursion Example

const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manuel',
            friends: [
                {
                    name: 'Chris',
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
};

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