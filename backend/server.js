require('dotenv').config();
const express = require('express');
// const sequelize = require('./config/config.json')
const manualsRoutes = require('./routes/manual.js')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/manual", manualsRoutes)

app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

// sequelize
//     .authenticate()
//     .then(() => console.log("Conectado a la base de datos MySQL"))
//     .catch((error) => console.log(error))


const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error al iniciar el servidor:", err);
        return;
    }
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
