var db = require("../dbconnection"); //reference of dbconnection.js

var Usuario = {
  getUser: function(username, callback) {
    return db.query(
      "SELECT * FROM Usuario where nombreUsuario=?",
      username,
      callback
    );
  },

  getAllUsers: function(callback) {
    return db.query("SELECT * FROM Usuario", callback);
  },

  addUser: function(Usuario, callback) {
    return db.query(
      "INSERT INTO Usuario(`nombre`, `apellido`, `fechaNacimiento`, `telefono`, `direccion`, `email`, `nombreUsuario`, `password`, `descripcion`, `esPasajero`, `esConductor`, `esAdministrador`, `foto`) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        Usuario.nombre,
        Usuario.apellido,
        Usuario.fechaNacimiento,
        Usuario.telefono,
        Usuario.direccion,
        Usuario.email,
        Usuario.nombreUsuario,
        Usuario.password,
        Usuario.descripcion,
        Usuario.esPasajero,
        Usuario.esConductor,
        Usuario.esAdministrador,
        Usuario.foto
      ],
      callback
    );
  },

  deleteUser: function(username, callback) {
    return db.query(
      "DELETE FROM Usuario WHERE nombreUsuario=?",
      [username],
      callback
    );
  },

  updateUser: function(Usuario, callback) {
    return db.query(
      "UPDATE table SET `nombre` = ?, `apellido` = ?, `fechaNacimiento` = ?, `telefono` = ?, `direccion` = ?, `email` = ?, `password` = ?, `descripcion` = ?, `esPasajero` = ?, `esConductor` = ?, `esAdministrador` = ?, `foto` = ? WHERE `nombreUsuario` = ?",
      [
        Usuario.nombre,
        Usuario.apellido,
        Usuario.fechaNacimiento,
        Usuario.telefono,
        Usuario.direccion,
        Usuario.email,
        Usuario.password,
        Usuario.descripcion,
        Usuario.esPasajero,
        Usuario.esConductor,
        Usuario.esAdministrador,
        Usuario.foto,
        Usuario.nombreUsuario
      ],
      callback
    );
  }
};

module.exports = Usuario;
