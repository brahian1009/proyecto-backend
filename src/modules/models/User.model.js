const getConnection = require('../../interface/DBconn.js');

class User {
  constructor(nombre, correo, contrasena, telefono, rol) {
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.telefono = telefono;
    this.rol = rol;
  }

  async createUser() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`
        INSERT INTO usuarios (nombre, correo, contrasena, telefono, rol)
        VALUES (?, ?, ?, ?, ?)
      `, [this.nombre, this.correo, this.contrasena, this.telefono, this.rol]);

      // Obtén el ID del último registro insertado
      const userId = result.insertId;

      return { id: userId }; // Devuelve el ID del nuevo usuario
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

  async viewUsers() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        nombre,
         correo, 
         contrasena, 
         telefono, 
         rol
        FROM usuarios
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

  async updateUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE usuarios
        SET nombre = ?,
        correo = ?,
        contrasena = ?,
        telefono = ?,
        rol = ?
        WHERE id = ?
      `, [this.nombre, this.correo, this.contrasena, this.telefono, this.rol, userId]);

      return { id: userId }; // Devuelve el ID del usuario actualizado
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

  async deleteUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM usuarios
        WHERE id = ?
      `, [userId]);

      return { id: userId }; // Devuelve el ID del usuario eliminado
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

  async findUser() {

    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        nombre,
         correo, 
         contrasena, 
         telefono, 
         rol
        FROM usuarios
        where correo=? and contrasena = ?
      `, [this.correo, this.contrasena]);

      return result; // Devuelve el resultado de la consulta
    }
      catch (error) {
        throw {
          ok: false,
          statusCode: 500,
          data: 'Ocurrió un error al obtener el usuario'
        };
      } finally {
        connection.release(); // Libera la conexión de vuelta al pool
      }
        
  }

  async viewUsers() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        nombre,
         correo, 
         contrasena, 
         telefono, 
         rol
        FROM usuarios
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

}

module.exports = User;