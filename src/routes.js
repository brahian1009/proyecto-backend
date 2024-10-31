 const Router = require('express');
 const router= Router();

let authRoutes= require('./modules/routes/auth.routes');
let productRoutes= require('./modules/routes/product.routes');
let comprasRoutes=require('./modules/routes/compras.routes');

 router.get('/api-status',(req,res)=>{
    return res.send({'Status':'on'})
 })
 
 router.use(authRoutes);
 router.use(productRoutes);
 router.use(comprasRoutes);

 module.exports= router;