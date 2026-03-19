
let counter = 10;
const element = document.getElementById("counter");

function decreaseCount() {
    counter -= 1;
    return element.textContent = counter
}
function increaseCount() {
    counter += 1;
    return element.textContent = counter
}




function resetCounter() {
    counter = 0;
    return element.textContent = counter
}

function saveCounter() {
    return localStorage.setItem("counter", counter)
}
function loadCounter() {
    counter = Number(localStorage.getItem("counter"))
    return element.textContent = counter
}




