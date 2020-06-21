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

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
}

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
    }) 
    ;
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);