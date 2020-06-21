const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        // 시작은 xhr 객체 생성부터
        const xhr = new XMLHttpRequest(); // 브라우저 지원률 최고

        // 'Request'요청 구성하기
        xhr.open(method, url); 

        xhr.responseType = 'json'; // JSON 데이터를 일반 자바스크립트로 변환 1

        // 데이터가 응답 완료되면 이벤트
        xhr.onload = function() {
            resolve(xhr.response);
            // const listOfPosts = JSON.parse(xhr.response); // JSON 데이터를 일반 자바스크립트로 변환 2
        };

        // 'Request'요청 전송하기
        xhr.send(JSON.stringify(data)); // => 이러면 서버에서 데이터를 응답한다.
    });

    return promise;
}

async function fetchPosts() {
    const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    const listOfPosts = responseData;
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent =  post.body;
        listElement.append(postEl);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchPosts();
createPost('DUMMY', 'A dummy post!');