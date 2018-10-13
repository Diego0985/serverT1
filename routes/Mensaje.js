
var express = require("express");
var router = express.Router();
var Mensaje = require("../models/Mensaje");

// Retrieve all todos los mensajes para un id de usuario
router.get("/usuario/:idUsuario", function(req, res) {
    let idUsuario = req.params.idUsuario;

    if (!idUsuario) {
      return res.status(400).send({ error: true, message: "Usuario incorrecto" });
    }


  Mensaje.getAllMessages(idUsuario, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Recuperar un solo mensaje
router.get("/:idMensaje", function(req, res) {
  let idMensaje = req.params.idMensaje;

  if (!idMensaje) {
    return res.status(400).send({ error: true, message: "Identificador de mensaje incorrecto" });
  }

  Mensaje.getOneMessage(idMensaje, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


// Crear un nuevo mensaje
router.post("/", function(req, res) {
    let idUsuario = req.body.idUsuario;
  
    if (!idUsuario) {
      return res
        .status(400)
        .send({ error: true, message: "Id de usuario no encontrado" });
    }
  
    Mensaje.addMessage(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  

//Eliminar un mensaje
router.delete("/", function(req, res) {
    let idMensaje = req.body.idMensaje;
  
    if (!idMensaje) {
      return res
        .status(400)
        .send({ error: true, message: "Mensaje no encontrado" });
    }
  
    Mensaje.deleteMessage(idMensaje, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });



  //Eliminar los mensajes de un usuario
router.delete("/search/", function(req, res) {
    let idUsuario = req.body.idUsuario;
  
    if (!idUsuario) {
      return res
        .status(400)
        .send({ error: true, message: "Usuario no encontrado" });
    }
  
    Mensaje.deleteAllUserMessages(idUsuario, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });


  // Actualizar un usuario
router.put("/", function(req, res) {
    let idMensaje = req.body.idMensaje;
  
    if (!idMensaje) {
      return res
        .status(400)
        .send({ error: true, message: "Mensaje no encontrado" });
    }
  
    Mensaje.updateMessage(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });



module.exports = router;
