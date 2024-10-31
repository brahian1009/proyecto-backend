const Router = require('express');

// API middlewares
const { createProductAPI, viewProductAPI, updateProductAPI, deleteProductAPI} = require('../api/product.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/product/createProduct', createProductAPI);

// Rutas get
router.get('/product/viewProduct', viewProductAPI);

// Rutas put
router.put('/product/updateProduct', updateProductAPI);

// Rutas delete
router.delete('/product/deleteProduct', deleteProductAPI);

module.exports = router;