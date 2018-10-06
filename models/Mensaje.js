var db = require("../dbconnection"); //reference of dbconnection.js

var Mensaje = {

    /// Metodo para recuperar todos los mensajes
  getAllMessages: function(idUsuario, callback) {
    return db.query(
      "SELECT * FROM Mensaje where idUsuario=?",
      idUsuario,
      callback
    );
  },
  
  /// Metodo para eliminar un mensaje especifico
  deleteMessage: function(idMensaje, callback) {
    return db.query(
      "DELETE FROM Mensaje WHERE idMensaje=?",
      [idMensaje],
      callback
    );
  },

  //Metodo para eliminar todos los mensajes de un usuario
  deleteAllMessages: function(idUser, callback) {
    return db.query(
      "DELETE FROM Mensaje WHERE idUsuario=?",
      [idUser],
      callback
    );
  },

  //Metodo para modificar el contenido de un mensaje
  updateUser: function(idMensaje, callback) {
    return db.query(
      "UPDATE table SET `contenido` = ?, WHERE `idMensaje` = ?",
      [
        
        Mensaje.contenido,
        Mensaje.idMensaje,
        
      ],
      callback
    );
  }
};

module.exports = Usuario;
