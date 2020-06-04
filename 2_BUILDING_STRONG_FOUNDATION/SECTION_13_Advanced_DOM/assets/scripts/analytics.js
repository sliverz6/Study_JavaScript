
const intervalId = setInterval(() => {
    console.log('Sending analytics...');
}, 2000);

document.getElementById('start-analytics-btn').addEventListener('click', () => {
    clearInterval(intervalId);
});