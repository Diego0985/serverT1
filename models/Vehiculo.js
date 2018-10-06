var db = require("../dbconnection"); //reference of dbconnection.js

var Vehiculo = {
  getVehicleById: function(idVehicle, callback) {
    return db.query(
      "SELECT * FROM Vehiculo where idVehiculo=?",
      idVehicle,
      callback
    );
  },

  getVehicleByUser: function(idUser, callback) {
    return db.query(
      "SELECT * FROM Vehiculo where idUsuario=?",
      idUser,
      callback
    );
  },

  getAllVechicles: function(callback) {
    return db.query("SELECT * FROM Vehiculo", callback);
  },

  addVehicle: function(Vehiculo, callback) {
    return db.query(
      "INSERT INTO `Vehiculo`  (`numeroPlaca`,  `modelo`,  `marca`,  `año`,  `numeroAsientos`,  `tipo`,  `idUsuario`)  VALUES  (?,?,?,?,?,?,?)",
      [
        Vehiculo.numeroPlaca,
        Vehiculo.modelo,
        Vehiculo.marca,
        Vehiculo.año,
        Vehiculo.numeroAsientos,
        Vehiculo.tipo,
        Vehiculo.idUsuario
      ],
      callback
    );
  },

  deleteVehicle: function(idVehiculo, callback) {
    return db.query(
      "DELETE FROM Vehiculo WHERE idVehiculo=?",
      [idVehiculo],
      callback
    );
  },

  updateVehicle: function(Vehiculo, callback) {
    return db.query(
      "UPDATE Vehiculo  SET  `numeroPlaca` = ?,  `modelo` = ?,  `marca` = ?,  `año` = ?,  `numeroAsientos` = ?,  `tipo` = ?,  `idUsuario` = ?  WHERE `idVehiculo` = ?",
      [
        Vehiculo.numeroPlaca,
        Vehiculo.modelo,
        Vehiculo.marca,
        Vehiculo.año,
        Vehiculo.numeroAsientos,
        Vehiculo.tipo,
        Vehiculo.idUsuario,
        Vehiculo.idVehiculo
      ],
      callback
    );
  }
};

module.exports = Vehiculo;
