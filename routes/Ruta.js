var express = require("express");
var router = express.Router();
var Ruta = require("../models/Ruta");

// Obtener todas las rutas
router.get("/", function(req, res) {
  Ruta.getAllRoutes(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Obtener una ruta por idRuta
router.get("/search/:idRuta", function(req, res) {
  let idRuta = req.params.idRuta;

  if (!idRuta) {
    return res.status(400).send({ error: true, message: "Id Ruta incorrecto" });
  }

  Ruta.getRouteById(idRuta, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Agregar una nueva ruta
router.post("/", function(req, res) {
  let titulo = req.body.titulo;

  if (!titulo) {
    return res
      .status(400)
      .send({ error: true, message: "Datos de ruta incompletos" });
  }

  Ruta.addRoute(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Eliminar una ruta
router.delete("/", function(req, res) {
  let idRuta = req.body.idRuta;

  if (!idRuta) {
    return res
      .status(400)
      .send({ error: true, message: "Id Ruta no encontrado" });
  }

  Ruta.deleteRoute(idRuta, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Actualizar un vehiculo
router.put("/", function(req, res) {
  let idRuta = req.body.idRuta;

  if (!idRuta) {
    return res
      .status(400)
      .send({ error: true, message: "Id Ruta no encontrado" });
  }

  Ruta.updateRoute(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
