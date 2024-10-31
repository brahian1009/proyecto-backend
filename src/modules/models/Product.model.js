const getConnection = require('../../interface/DBconn.js');

class Product {
  constructor(name, brand, price, type, available) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.type = type;
    this.available = available;
  }

  async createProduct() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`
        INSERT INTO productos (nombre, marca, precio, tipo, disponibilidad)
        VALUES (?, ?, ?, ?, ?)
      `, [this.name, this.brand, this.price, this.type, this.available]);

      // Obtén el ID del último registro insertado
      const ProductId = result.insertId;

      return { id: ProductId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewProduct() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        nombre,
         marca,
        precio,
        tipo, 
        disponibilidad
        FROM Productos
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los usuarios'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }


async updateProduct(productId) {
  const connection = await getConnection();

  try {
    // Ejecuta la consulta de actualización
    await connection.query(`
      UPDATE productos
      SET nombre = ?,
          marca = ?,
          precio = ?,
          tipo = ?,
          disponibilidad = ?
      WHERE id = ?
    `, [ this.name, this.brand, this.price, this.type, this.available, productId]);

    return { id: productId }; // Devuelve el ID de la herramienta actualizada
  } catch (error) {
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar el usuario'
    };
  } finally {
    connection.release(); // Libera la conexión de vuelta al pool
  }
}

async deleteProduct(productId) {
  const connection = await getConnection();

  try {
    // Ejecuta la consulta de eliminación
    await connection.query(`
      DELETE FROM productos
      WHERE id = ?
    `, [productId]);

    return { id: productId }; // Devuelve el ID del usuario eliminado
  } catch (error) {
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el usuario'
    };
  } finally {
    connection.release(); // Libera la conexión de vuelta al pool
  }
}
}


module.exports = Product;