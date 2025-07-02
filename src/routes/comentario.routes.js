const {Router} = require("express");
const router = Router();

// Importamos el modelo
const comentarioModel = require("../models/comentario.model.js");

// CRUD Comentarios
router.post("/comentarios", async (req, res) =>{
    const body = req.body;
    const respuesta = await comentarioModel.create(body);
    res.send(respuesta)
});

router.get("/comentarios", async (req, res) =>{
    const respuesta = await comentarioModel.find({});
    res.send(respuesta)
});

router.get("/comentarios/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await comentarioModel.findById(id);
    res.send(respuesta)
});

router.put("/comentarios/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await comentarioModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/comentarios/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await comentarioModel.deleteOne({_id: id})
    res.send(respuesta)
});

module.exports = router;
