const Compras = require('../models/Compras.model.js');

async function createCompras(options) {
  const compras = new Compras(
    options.usuarios_id,
    options.productos_id 
    
  );

  let comprasResult;
  try {
    comprasResult = await compras.createCompras();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear la compra'
    };
  }


  return {
    message: 'Compra creada exitosamente',
  };
}

async function viewCompras() {
  const compras = new Compras();
  let comprasResult;
  
  try {
    ComprasResult = await compras.viewCompras();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al mostrar las compras.'
    };
  }

  return  ComprasResult;
}

async function updateCompras(options) {
  const compras = new Compras(
    
  );

  try {
    comprasResult = await compras.updateCompras(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar la compra'
    };
  }

  return {
    message: 'Compra actualizado exitosamente',
  };

  
}

async function deleteCompras(options) {
  const compras = new Compras();

  try {
    comprasResult = await compras.deleteCompras(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar la compra'
    };
  }

  return {
    message: 'Compra eliminada exitosamente'
  };
}

module.exports = {
  createCompras,
  viewCompras,
  updateCompras,
  deleteCompras
};
