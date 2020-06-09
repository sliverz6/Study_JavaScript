const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hello there!');
}

function introduceMySelf(name) {
    alert('Hi, my name is ' + name + '.');
}

greet();
introduceMySelf('Lee Seung Jae');

task3Element.addEventListener('click', greet);

function threeName(name1, name2, name3) {
    const result = name1 + name2 + name3;
    return result;
}

alert(threeName('Hi', 'I\'m', 'SeungJae'));