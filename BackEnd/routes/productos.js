/* 
Ruta: /api/productos
*/

const {Router} = require('express');
const {getProductos} = require('../controllers/productos');

const router =  Router();


router.get('/',getProductos);

//router.post('/',crearUsuario);

module.exports= router;