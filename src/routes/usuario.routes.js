const {Router} = require("express");
const router = Router();

// Importamos el modelo
const usuarioModel = require("../models/usuario.model.js");

// CRUD Usuarios
router.post("/usuarios", async (req, res) =>{
    const body = req.body;
    const respuesta = await usuarioModel.create(body);
    res.send(respuesta)
});

router.get("/usuarios", async (req, res) =>{
    const respuesta = await usuarioModel.find({});
    res.send(respuesta)
});

router.get("/usuarios/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await usuarioModel.findById(id);
    res.send(respuesta)
});

router.put("/usuarios/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await usuarioModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/usuarios/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await usuarioModel.deleteOne({_id: id})
    res.send(respuesta)
});

module.exports = router;