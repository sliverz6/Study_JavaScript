/**************************/
// 배열 생성

// 배열 생성 1
// const array = [1, 2, 3];

// 배열 생성 2
// const array = new Array(1, 2, 3);

// 배열 생성 3
// const array = Array.of(1, 2, 3);

// 배열 생성 4
// const array = Array.from('Hello!');

// console.log(array);

/**************************/
// 배열 요소 추가, 제거

// const hobbies = ['Coding', 'Sports'];

// // 뒤에 추가
// hobbies.push('Reading');

// // 앞에 추가
// hobbies.unshift('Music');

// // 맨 뒤 요소 제거
// // hobbies.pop();
// const poppedProperty = hobbies.pop();
// console.log(poppedProperty);

// // 맨 앞의 요소 제거

// hobbies.shift();

// console.log(hobbies);

// 특정 지점에서 속성 추가, 제거

// const array = [1, 6, 3.5, 10, -3];

// // 특정 지점에서 추가
// array.splice(1, 0, 3);

// // 특정 지점 제거
// array.splice(3, 1);

// console.log(array);

/**************************/
// 배열 복제

// const array = [1, 6, 3.6, 10, -3];

// const newArray = array.slice();

// newArray.pop();

// console.log(array, newArray);

/**************************/
// 배열 연결 (새로운 배열 생성)

// const array1 = [1, 2, 3];
// const array2 = [4, 5];
// const concatArray = array1.concat(array2);

// console.log(concatArray);

/**************************/
// 배열 탐색 1 (primitives value)

// const array = [3, 6, -3, 2.2, 10];

// console.log(array.indexOf(6));

/**************************/
// 배열 탐색 2 (reference value)

// const persons = [{name: 'Lee'}, {name: 'Park'}];
// const Lee = persons.find(person => person.name === 'Lee');
// console.log(Lee);
// Lee.name = 'Lee Seung Jae';
// console.log(persons, Lee);

/**************************/
// 배열 반복

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);