const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// Acceder a las variables de entorno
 const PORT = process.env.PORT || 3000;
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const NAME = process.env.DB_NAME;

// Importar rutas
const personaRoutes = require('./persona.js');
const municipioRoutes = require('./municipio.js');
const direccionRoutes = require('./direccion.js');
const viviendaRoutes = require('./vivienda.js');
const relacionRoutes = require('./relacion.js');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(path.join(__dirname, "C:/Users/danig/Documents/UN - MATERIAS PRACTICAS/INGE SOFTWARE II/lab0-2/lab0-ingesfot2/lab0-front/dist")))


// Usar rutas
app.use('/persona', personaRoutes);
app.use('/municipio', municipioRoutes);
app.use('/direccion', direccionRoutes);
app.use('/vivienda', viviendaRoutes);
app.use('/relacion', relacionRoutes);

// Puerto

app.listen(PORT, () => {
    console.log(`Conectando a la base de datos en ${HOST}...`);;
});

