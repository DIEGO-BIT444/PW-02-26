const express = require("express");

const app = express();
const PORT = 3000;

app.get("/api/funcion/:parametroURL", (req, res) => {

    const salario = parseFloat(req.params.parametroURL);

    // Validación 1: No es numérico
    if (isNaN(salario)) {
        return res.status(400).json({
            error: "El salario debe ser numérico"
        });
    }

    // Validación 2: Es igual a 0
    if (salario == 0  ||   salario < 0) {
        return res.status(400).json({
            error: "El salario debe ser un numero mayor a cero"
        });
    }

    

    // Cálculo del IVA (13%)
    const iva = salario * 0.13;

    // Cálculo de Renta (10%)
    const renta = salario * 0.10;

    // Respuesta
    res.json({
        monto: salario,
        iva: iva,
        renta: renta
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
