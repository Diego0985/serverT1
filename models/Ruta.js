var db = require("../dbconnection"); //reference of dbconnection.js

var Ruta = {
  getRouteById: function(idRuta, callback) {
    return db.query("SELECT * FROM Ruta where idRuta=?", idRuta, callback);
  },

  getAllRoutes: function(callback) {
    return db.query("SELECT * FROM Ruta", callback);
  },

  addRoute: function(Ruta, callback) {
    return db.query(
      "INSERT INTO `Ruta` (  `origen`,  `destino`,  `origenCoord`,  `destinoCoord`,  `fechaInicio`,  `fechaFin`,  `tiempoViaje`,  `descripcion`,  `titulo`,  `numeroUsuarios`)  VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        Ruta.origen,
        Ruta.destino,
        Ruta.origenCoord,
        Ruta.destinoCoord,
        Ruta.fechaInicio,
        Ruta.fechaFin,
        Ruta.tiempoViaje,
        Ruta.descripcion,
        Ruta.titulo,
        Ruta.numeroUsuarios
      ],
      callback
    );
  },

  deleteRoute: function(idRuta, callback) {
    return db.query("DELETE FROM Ruta WHERE idRuta=?", [idRuta], callback);
  },

  updateRoute: function(Ruta, callback) {
    return db.query(
      "UPDATE `Ruta`  SET  `origen` = ?,  `destino` = ?,  `origenCoord` = ?,  `destinoCoord` = ?,  `fechaInicio` = ?,  `fechaFin` = ?,  `tiempoViaje` = ?,  `descripcion` = ?,  `titulo` = ?,  `numeroUsuarios` = ?  WHERE `idRuta` = ?",
      [
        Ruta.origen,
        Ruta.destino,
        Ruta.origenCoord,
        Ruta.destinoCoord,
        Ruta.fechaInicio,
        Ruta.fechaFin,
        Ruta.tiempoViaje,
        Ruta.descripcion,
        Ruta.titulo,
        Ruta.numeroUsuarios,
        Ruta.idRuta
      ],
      callback
    );
  }
};

module.exports = Ruta;
