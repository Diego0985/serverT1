var express = require("express");
var router = express.Router();
var Usuario = require("../models/Usuario");

// Obtener todos los usuarios
router.get("/", function(req, res) {
  Usuario.getAllUsers(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Obtener un usuario por nombreUsuario
router.get("/:nombreUsuario", function(req, res) {
  let nombreUsuario = req.params.nombreUsuario;

  if (!nombreUsuario) {
    return res.status(400).send({ error: true, message: "Usuario incorrecto" });
  }

  Usuario.getUser(nombreUsuario, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Agregar un nuevo usuario
router.post("/", function(req, res) {
  let nombre = req.body.nombre;

  if (!nombre) {
    return res
      .status(400)
      .send({ error: true, message: "Nombre de usuario no encontrado" });
  }

  Usuario.addUser(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Eliminiar un usuario
router.delete("/", function(req, res) {
  let nombreUsuario = req.body.nombreUsuario;

  if (!nombreUsuario) {
    return res
      .status(400)
      .send({ error: true, message: "Nombre de usuario no encontrado" });
  }

  Usuario.deleteUser(nombreUsuario, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Actualizar un usuario
router.put("/", function(req, res) {
  let idUsuario = req.body.idUsuario;

  if (!idUsuario) {
    return res
      .status(400)
      .send({ error: true, message: "Nombre de usuario no encontrado" });
  }

  Usuario.updateUser(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
