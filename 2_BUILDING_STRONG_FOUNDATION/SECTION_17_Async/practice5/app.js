const button = document.querySelector('button');

const getPosition = opts => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }); 
    });
    return promise;
};

const setTimer = async duration => {
    const promise = new Promise((resolve, reject) => { // 생성자가 곧바로 매개변수 함수 실행
        setTimeout(() => {
            resolve('Done!'); // 완료됐을때 실행
        }, duration);
    });
    return promise;
};

// async / await
async function trackUserHandler() {
    let posData;
    let timerData;
    // async 키워드에서 Error 핸들링은 try / catch 키워드를 사용한다.
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (error) {
        console.log(error);        
    }
    console.log(timerData, posData);
    // let positionData;
    // getPosition()
    //     .then(posData => {
    //         positionData = posData;
    //         return setTimer(2000);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         return 'on we go...';
    //     })
    //     .then(data => {
    //         console.log(data, positionData);
    //     });
    // navigator.geolocation.getCurrentPosition(posData => {
    //     setTimer(2000).then(data => { // data에는 resolve함수에 매개변수로 전달한 값이 들어간다.
    //         console.log(data, posData);
    //     });
    // }, error => {
    //     console.log(error);
    // });
    setTimer(1000).then(() => {
        console.log('Timer Done!');
    });

    // setTimeout(() => {
    //     console.log('Timer Done!');
    // }, 0); // 0초라도 실행하는데 0초보다 오래 걸린다.
    console.log('Getting Position...'); // 가장 먼저 실행된다.
}

button.addEventListener('click', trackUserHandler);

// Promise.race([
//     getPosition(),
//     setTimer(1000)
// ]).then(data => {
//     console.log(data)
// });

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//     console.log(promiseData);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData);
});

///// 비동기적 코드 실행 흐름 //////

// result = 0;

// // 반복문이 끝나기 전까지 콜백함수는 실행되지 않는다.
// for (let i = 0; i < 100000000; i++) {
//     result += i;
// }

// console.log(result);

// 자바스크립트는 동기적 언어 (Sync)
// Async 특징이 있다. 