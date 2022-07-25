/* 
Ruta: /api/productos
*/

const {Router} = require('express');
const {getProductos,crearProducto} = require('../controllers/productos');

const router =  Router();


router.get('/',getProductos);

router.post('/',crearProducto);

module.exports= router;