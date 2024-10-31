const User = require('../models/User.model.js');

async function createUser(options) {
  const user = new User(
    options.nombre, 
    options.correo, 
    options.contrasena, 
    options.telefono, 
    options.rol
  );

  let userResult;
  try {
    userResult = await user.createUser();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el usuario'
    };
  }

  console.log(userResult);

  return {
    message: 'Usuario creado exitosamente',
  };
}

async function viewUsers() {
  const user = new User();
  let userResult;
  
  try {
    userResult = await user.viewUsers();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener los usuarios'
    };
  }

  console.log(userResult);
  return  userResult;
}

async function updateUser(options) {
  const user = new User(
    options.nombre, 
    options.correo, 
    options.contrasena, 
    options.telefono, 
    options.rol
  );

  try {
    userResult = await user.updateUser(options.id);
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

async function deleteUser(options) {
  const user = new User();

  try {
    userResult = await user.deleteUser(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el usuario'
    };
  }

  return {
    message: 'Usuario eliminado exitosamente'
  };
}

async function login(options) {
  const user = new User(
    "", 
    options.email, 
    options.password, 
    "", 
    "", 
    ""
  );

  try {
    userResult = await user.findUser();
  } catch (error) {
    if (error.statusCode) throw error;
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al iniciar sesión'
    };
  }

  return {
    message: 'Sesión iniciada exitosamente',
    user: userResult,
  };
}

module.exports = {
  createUser,
  viewUsers,
  updateUser,
  deleteUser,
  login
};

