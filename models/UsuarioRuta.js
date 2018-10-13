var db = require("../dbconnection"); //reference of dbconnection.js

var UsuarioRuta = {

    /// Metodo para recuperar todas las Rutas de un Usuario
  getAllUserRoutes: function(idUsuario, callback) {
    return db.query(
      "SELECT * FROM USUARIORUTA where idUsuario=?",
      idUsuario,
      callback
    );
  },


  ///Metodo para recuperar todos los usuarios de una ruta
  getAllRouteUsers: function(idRuta, callback) {
    return db.query(
      "SELECT * FROM USUARIORUTA where idRuta=?",
      idRuta,
      callback
    );
  },
  

  //Asociar una nueva Ruta con su Usuario
  addUserRoute: function(UsuarioRuta, callback) {
    return db.query(
      "INSERT INTO USUARIORUTA (`idUsuario`, `idRuta`) VALUES (?, ?)",
      [
        UsuarioRuta.idUsuario,
        UsuarioRuta.idRuta
      ],
      callback
    );
  },




  /// Metodo para eliminar un mensaje especifico
  deleteUserRoute: function(idUsuarioRuta, callback) {
    return db.query(
      "DELETE FROM Usuarioruta WHERE idUsuarioRuta=?",
      [idUsuarioRuta],
      callback
    );
  },

  
};

module.exports = UsuarioRuta;
