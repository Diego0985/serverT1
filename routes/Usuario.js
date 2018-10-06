var express = require("express");
var router = express.Router();
var Usuario = require("../models/Usuario");

// Retrieve all todos
router.get("/", function(req, res) {
  Usuario.getAllUsers(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Retrieve todo with id
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

// Search for usuarios by their name
router.get("/search/:nombre", function(req, res) {
  let nombre = req.params.nombre;
  mc.query(
    "SELECT * FROM Usuario WHERE nombre LIKE ? ",
    ["%" + nombre + "%"],
    function(error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Usuario por nombre"
      });
    }
  );
});

// Add a new user
router.post("/", function(req, res) {
  let nombre = req.body.nombre;

  if (!nombre) {
    return res
      .status(400)
      .send({ error: true, message: "Nombre de usuario no encontrado" });
  }

  mc.query("INSERT INTO Usuario SET ? ", { Usuario: usuario }, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results,
      message: "Agregar Usuario."
    });
  });
});

module.exports = router;
