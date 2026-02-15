const express = require('express');
const app = express();
const PORT = 3000;

// 1. Ruta Principal - Respuesta 200 (OK)
app.get('/', (req, res) => {
    res.status(200).send('¡Bienvenido al servidor! Todo está OK.');
});

// 2. Ruta para simular Error - Respuesta 500 (Internal Server Error)
app.get('/error', (req, res) => {
    try {
        // Simulamos un fallo catastrófico
        throw new Error("Error forzado por el usuario");
    } catch (err) {
        res.status(500).send('500 ¡Ups! Algo salió mal en el servidor.');
    }
});

// 3. Manejo de Rutas inexistentes - Respuesta 404 (Not Found)
// Nota: Esta ruta siempre debe ir al final de todas las demás
app.use((req, res) => {
    res.status(404).send('404 Lo sentimos, no encontramos lo que buscas.');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});