const express = require('express');

const app = express();
app.use(express.json());

const port = 8000;

// Impuestos por país
const impuestosPorPais = {
    'El Salvador': { iva: 0.13, renta: 0.10 },
    'Guatemala': { iva: 0.12, renta: 0.08 },
    'Costa Rica': { iva: 0.25, renta: 0.15 },
    'Honduras': { iva: 0.20, renta: 0.12 },
    'Panama': { iva: 0.30, renta: 0.20 },
    'Nicaragua': { iva: 0.15, renta: 0.10 }
};

// Función para calcular IVA
function calcularIVA(salario, porcentajeIVA) {
    return salario * porcentajeIVA;
}

// Función para calcular Renta
function calcularRenta(salario, porcentajeRenta) {
    return salario * porcentajeRenta;
}

// Función para calcular salario neto
function calcularSalarioNeto(salario, iva, renta) {
    return salario - iva - renta;
}

// Ruta para calcular impuestos
app.post('/impuestos', (req, res) => {
    try {
        // Obtener los datos enviados
        const body = req.body;
        const pais = body.pais;
        const salarioBruto = Number(body.salarioBruto);

        // Validar que existan los datos
        if (!pais || body.salarioBruto === undefined) {
            return res.status(400).json({
                error: 'Faltan datos. Debe enviar pais y salarioBruto.'
            });
        }

        // Validar que el salario sea un número
        if (isNaN(salarioBruto)) {
            return res.status(400).json({
                error: 'El salarioBruto debe ser un número.'
            });
        }

        // Validar que el salario sea mayor que cero
        if (salarioBruto <= 0) {
            return res.status(400).json({
                error: 'El salarioBruto debe ser mayor que 0.'
            });
        }

        // Lista de países permitidos
        const paisesPermitidos = [
            'El Salvador',
            'Guatemala',
            'Costa Rica',
            'Honduras',
            'Panama',
            'Nicaragua'
        ];

        // Validar el país
        if (!paisesPermitidos.includes(pais)) {
            return res.status(400).json({
                error: 'País no permitido.'
            });
        }

        // Obtener los impuestos del país
        const impuestos = impuestosPorPais[pais];

        const porcentajeIVA = impuestos.iva;
        const porcentajeRenta = impuestos.renta;

        // Calcular el IVA
        const montoIVA = calcularIVA(salarioBruto, porcentajeIVA);

        // Calcular la Renta
        const montoRenta = calcularRenta(salarioBruto, porcentajeRenta);

        // Calcular el salario neto
        const salarioNeto = calcularSalarioNeto(
            salarioBruto,
            montoIVA,
            montoRenta
        );

        // Enviar respuesta en formato JSON
        res.json({
            pais: pais,
            salarioBruto: salarioBruto,
            porcentajeIVA: `${porcentajeIVA * 100}%`,
            porcentajeRenta: `${porcentajeRenta * 100}%`,
            iva: montoIVA,
            renta: montoRenta,
            salarioNeto: salarioNeto
        });

    } catch (error) {
        // Manejar errores del servidor
        res.status(500).json({
            error: 'Ocurrió un error en el servidor.'
        });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});