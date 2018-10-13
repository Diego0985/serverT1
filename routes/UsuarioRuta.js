
var express = require("express");
var router = express.Router();
var UsuarioRuta = require("../models/UsuarioRuta");

// Retrieve all todas las Rutas de un usuario
router.get("/usuario/:idUsuario", function(req, res) {
    let idUsuario = req.params.idUsuario;

    if (!idUsuario) {
      return res.status(400).send({ error: true, message: "Usuario incorrecto" });
    }


  UsuarioRuta.getAllUserRoutes(idUsuario, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});



// Recuperar todos los usuarios de una ruta.
router.get("/ruta/:idRuta", function(req, res) {
  let idRuta = req.params.idRuta;

  if (!idRuta) {
    return res.status(400).send({ error: true, message: "Identificador de ruta incorrecto" });
  }

  UsuarioRuta.getAllRouteUsers(idRuta, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


// Crear un nuevo mensaje
router.post("/", function(req, res) {
  let idUsuarioRuta = req.body.idUsuarioRuta;

  if (!idUsuarioRuta) {
    return res
      .status(400)
      .send({ error: true, message: "Id de usuario no encontrado" });
  }

  UsuarioRuta.addUser(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});






module.exports = router;
