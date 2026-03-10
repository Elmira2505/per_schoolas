function addOrSubtract(num) {
    if (num < 10) {
        return num + 7;
    } else return num - 3;
}

console.log("add function", addOrSubtract(5));

const multiply = (num1, num2) => num1 * num2;
console.log("multiply arrow function ", multiply(4, 5));

function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.substr(1);
}

console.log("capitalize function - ", capitalize('capitalize'));

function lastLetter(str) {
    console.log(str.length)
    return str.slice(-1);
}
console.log('lastLetter function - ' + lastLetter('lastLetter'))
