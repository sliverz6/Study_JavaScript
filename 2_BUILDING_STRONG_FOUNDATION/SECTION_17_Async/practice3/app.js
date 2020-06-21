const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            success => {
                resolve(success);
            },
            error => {
                reject(error);
            },
            opts
        );
    });
    return promise;
};

// Promisingfy API
const setTimer = duration => {
    const promise = new Promise((resolve, reject) => { // 즉시 등록
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });
    return promise;
};

function trackUserHandler() {
    let positionData;
    getPosition()
        .then(posData => {
            positionData = posData;
            return setTimer(2000);
        })
        .catch(err => {
            console.log(err);
            return 'on we go...';
        })
        .then(data => {
            console.log(data, positionData);
        });
    setTimer(1000).then(() => {
        console.log('Timer done!');
    });
    console.log('Getting Position...'); // Async 특징 때문에 먼저 실행
}

button.addEventListener('click', trackUserHandler); 

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//     result += i;
// }

// console.log(result);

// Async 코드
// 1. 코드 실행 중에 멈추지 않게(block) Async 개념을 사용한다.
// 2. 자바스크립트는 실행이 오래 걸리는 코드와 추후에 실행할 Callback 함수를 브라우저에게 넘긴다.
// 3. 브라우저는 콜백함수를 관리하고 있다가 실행할 시기가 오면 (ex)event 발생) Message Queue에 기록해둔다.
// 4. 자바스크립트 엔진의 Stack이 비면 Message Queue에 기록된 콜백함수를 불러와서 실행한다.
// 따라서 Stack 안에 실행할 코드가 있다면 Callback 함수는 즉시 실행되지 않는다.

// Promise 개념
// 1. 콜백함수 안에 콜백함수 안에 콜백함수.. 이렇게 연속적으로 콜백함수가 중첩되면 'callback hell' 이 된다.
// 2. 좀 더 알아보기 쉽게 하기 위해 Promise를 사용한다.