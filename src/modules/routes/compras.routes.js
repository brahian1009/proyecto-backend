const Router = require('express');

// API middlewares
const { createComprasAPI, viewComprasAPI, updateComprasAPI, deleteComprasAPI} = require('../api/compras.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/compras/createCompras', createComprasAPI);

// Rutas get
router.get('/compras/viewCompras', viewComprasAPI);

// Rutas put
router.put('/compras/updateCompras', updateComprasAPI);

// Rutas delete
router.delete('/compras/deleteCompras', deleteComprasAPI);

module.exports = router;