const getConnection = require('../../interface/DBconn.js');

class Compras {
  constructor(usuarios_id, productos_id) {
    this.usuarios_id = usuarios_id;
    this.productos_id = productos_id;
   
  }

  async createCompras() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`
        INSERT INTO compras (usuarios_id, productos_id)
        VALUES (?, ?)
      `, [this.usuarios_id, this.productos_id]);

      // Obtén el ID del último registro insertado
      const ComprasId = result.insertId;

      return { id: ComprasId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar la compra'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewCompras() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        usuarios_id,
        productos_id
        FROM Compras
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener la compra'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }


async updateCompras(comprasId) {
  const connection = await getConnection();

  try {
    // Ejecuta la consulta de actualización
    await connection.query(`
      UPDATE compras
      SET usuarios_id = ?,
          productos_id = ?,
      WHERE id = ?
    `, [ this.usuarios_id, this.productos_id]);

    return { id: compras }; // Devuelve el ID de la herramienta actualizada
  } catch (error) {
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar la compra'
    };
  } finally {
    connection.release(); // Libera la conexión de vuelta al pool
  }
}

async deleteCompras(comprasId) {
  const connection = await getConnection();

  try {
    // Ejecuta la consulta de eliminación
    await connection.query(`
      DELETE FROM compras
      WHERE id = ?
    `, [comprasId]);

    return { id: ComprasId }; // Devuelve el ID del usuario eliminado
  } catch (error) {
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar la compra.'
    };
  } finally {
    connection.release(); // Libera la conexión de vuelta al pool
  }
}
}


module.exports = Compras;