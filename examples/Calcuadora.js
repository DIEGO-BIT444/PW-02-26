

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
        const suma = Number(num1) + Number(num2);
        const resta = Number(num1) - Number(num2);
        const multiplicacion = Number(num1) * Number(num2);
        const division = Number(num1) / Number(num2);

        console.log("Suma: " + suma);
        console.log("Resta: " + resta);
        console.log("Multiplicación: " + multiplicacion);
        console.log("División: " + division);

        rl.close();
    });
});
