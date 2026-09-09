const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular(num1, num2, opcion) {

    switch (opcion) {

        case 1:
            return num1 + num2;

        case 2:
            return num1 - num2;

        case 3:
            return num1 * num2;

        case 4:
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "No se puede dividir entre cero";
            }

        default:
            return "Opción no válida";
    }
}

rl.question(
    "MENÚ DE OPERACIONES\n" +
    "1. Suma\n" +
    "2. Resta\n" +
    "3. Multiplicación\n" +
    "4. División\n" +
    "Seleccione una opción: ",
    (respuesta) => {

        let opcion = Number(respuesta);

        rl.question("Ingrese el primer número: ", (respuesta) => {

            let num1 = Number(respuesta);

            rl.question("Ingrese el segundo número: ", (respuesta) => {

                let num2 = Number(respuesta);

                let resultado = calcular(num1, num2, opcion);

                console.log("Resultado: " + resultado);

                rl.close();
            });
        });
    }
);
