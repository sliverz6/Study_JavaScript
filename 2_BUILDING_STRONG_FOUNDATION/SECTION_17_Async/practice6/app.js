const button = document.querySelector('button');

const getPosition = opts => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(posData => {
            resolve(posData);
        }, err => {
            reject(err);
        });
    });
    return promise;
};

const setTimer = duration => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });
    return promise;
};

async function trackUserPosition() {
    let posData;
    let timerData;

    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (error) {
        console.log(error);
    }
    console.log(posData, timerData);

    // setTimer(1000).then(() => {
    //     console.log('Timer Done!');
    // });
    // console.log('Getting Position...');
}

button.addEventListener('click', trackUserPosition);