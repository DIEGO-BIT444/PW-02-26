/*let celsius = Number(console.log("Ingrese la temperatura en Celsius:"));

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperatura en Celsius: " + celsius);
console.log("Temperatura en Fahrenheit: " + fahrenheit);*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la temperatura en Celsius: ", (entrada) => {
    let celsius = Number(entrada);

    let fahrenheit = (celsius * 9 / 5) + 32;

    console.log("Temperatura en Celsius: " + celsius);
    console.log("Temperatura en Fahrenheit: " + fahrenheit);

    rl.close();
});
