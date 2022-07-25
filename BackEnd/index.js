//crear el servidor de express
const express =require('express');
const {dbConnection} = require('./database/config');
const cors = require('cors');

require('dotenv').config();

const app=express();

//Configurando CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();

//Rutas
app.use('/api/usuarios',require('./routes/usuarios'));


app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});