var db = require("../dbconnection"); //reference of dbconnection.js

var Mensaje = {

  getAllMessages: function(idUsuario, callback) {
    return db.query(
      "SELECT * FROM Mensaje where idUsuario=?",
      idUsuario,
      callback
    );
  },
  
  
  deleteMessage: function(idMensaje, callback) {
    return db.query(
      "DELETE FROM Mensaje WHERE idMensaje=?",
      [idMensaje],
      callback
    );
  },

  deleteAllMessages: function(idUser, callback) {
    return db.query(
      "DELETE FROM Mensaje WHERE idUsuario=?",
      [idUser],
      callback
    );
  },


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
