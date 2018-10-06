var express = require("express");
var router = express.Router();
var Vehiculo = require("../models/Vehiculo");

// Obtener todos los vehiculos
router.get("/", function(req, res) {
  Vehiculo.getAllVechicles(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Obtener un vehiculo por idVehiculo
router.get("/search/:idVehiculo", function(req, res) {
  let idVehiculo = req.params.idVehiculo;

  if (!idVehiculo) {
    return res
      .status(400)
      .send({ error: true, message: "Id Vehiculo incorrecto" });
  }

  Vehiculo.getVehicleById(idVehiculo, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Obtener un vehiculo por idUsuario
router.get("/usuario/:idUsuario", function(req, res) {
  let idUsuario = req.params.idUsuario;

  if (!idUsuario) {
    return res
      .status(400)
      .send({ error: true, message: "Id Usuario incorrecto" });
  }

  Vehiculo.getVehicleByUser(idUsuario, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Agregar un nuevo vehiculo
router.post("/", function(req, res) {
  let idUsuario = req.body.idUsuario;

  if (!idUsuario) {
    return res
      .status(400)
      .send({ error: true, message: "Nombre de usuario no encontrado" });
  }

  Vehiculo.addVehicle(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Eliminar un vehiculo
router.delete("/", function(req, res) {
  let idVehiculo = req.body.idVehiculo;

  if (!idVehiculo) {
    return res
      .status(400)
      .send({ error: true, message: "Id Vehiculo no encontrado" });
  }

  Vehiculo.deleteVehicle(idVehiculo, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Actualizar un vehiculo
router.put("/", function(req, res) {
  let idVehiculo = req.body.idVehiculo;

  if (!idVehiculo) {
    return res
      .status(400)
      .send({ error: true, message: "IdVehiculo no encontrado" });
  }

  Vehiculo.updateVehicle(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
