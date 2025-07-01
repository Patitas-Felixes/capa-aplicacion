const {Router} = require("express");
const router = Router();

// Importamos el modelo
const categoriaModel = require("../models/categoria.model.js");

// CRUD Categorias
router.post("/categorias", async (req, res) =>{
    const body = req.body;
    const respuesta = await categoriaModel.create(body);
    res.send(respuesta)
});

router.get("/categorias", async (req, res) =>{
    const respuesta = await categoriaModel.find({});
    res.send(respuesta)
});

router.get("/categorias/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await categoriaModel.findById(id);
    res.send(respuesta)
});

router.put("/categorias/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await categoriaModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/categorias/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await categoriaModel.deleteOne({_id: id})
    res.send(respuesta)
});

module.exports = router;
