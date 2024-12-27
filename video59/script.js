// Create a faulty calculator using Javascript
// This faulty calculator does following:
// 1.It takes two numbers as input from the user
// 2.It performs wrong operations as follows:
// 10% of the times
// + --> -
// * --> +
// - --> /
// / --> **

let num1 = 7;
let num2 = 8;
let randomDecimal = Math.random();
let randomNumber = randomDecimal ;
let operation = "add";
let result;
console.log(randomNumber);
if (randomNumber <= 0.1) {
    switch (operation) {
        case "add":
            result = num1 - num2;
            break;
        case "subtract":
            result = num1 / num2;
            break;
        case "multiply":
            result = num1 + num2;
            break;
        case "divide":
            result = num1 ** num2;
            break;
        default:
            result = "Invalid operation";
    }
    console.log(result);
} else {
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    console.log(result);
}
