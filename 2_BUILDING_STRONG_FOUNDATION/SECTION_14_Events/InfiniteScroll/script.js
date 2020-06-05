let curElementNumber = 0;

function scrollHandler(event) {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
    console.log(distanceToBottom);

    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>ELement ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}

window.addEventListener('scroll', scrollHandler); 