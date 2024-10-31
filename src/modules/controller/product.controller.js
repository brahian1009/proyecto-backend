const Product = require('../models/Product.model.js');

async function createProduct(options) {
  const product = new Product(
    options.name, 
    options.brand, 
    options.price, 
    options.type, 
    options.available
  );

  let ProductResult;
  try {
    ProductResult = await product.createProduct();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el usuario'
    };
  }


  return {
    message: 'Producto creado exitosamente',
  };
}

async function viewProduct() {
  const product = new Product();
  let productResult;
  
  try {
    ProductResult = await product.viewProduct();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener los usuarios'
    };
  }

  return  ProductResult;
}

async function updateProduct(options) {
  const product = new Product(
    options.name, 
    options.brand, 
    options.price, 
    options.type, 
    options.available
  );

  try {
    productResult = await product.updateProduct(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar el usuario'
    };
  }

  return {
    message: 'Usuario actualizado exitosamente',
  };

  
}

async function deleteProduct(options) {
  const product = new Product();

  try {
    productResult = await product.deleteProduct(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el producto'
    };
  }

  return {
    message: 'Producto eliminado exitosamente'
  };
}

module.exports = {
  createProduct,
  viewProduct,
  updateProduct,
  deleteProduct
};
