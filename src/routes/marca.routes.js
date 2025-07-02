const {Router} = require("express");
const router = Router();

// Importamos el modelo
const marcaModel = require("../models/marca.model.js");
const {estaAutenticado, esAdmin} = require("../middlewares/auth.middleware");

// CRUD Marcas
router.post("/marcas", estaAutenticado, esAdmin, async (req, res) =>{
    const body = req.body;
    const respuesta = await marcaModel.create(body);
    res.send(respuesta)
});

router.get("/marcas", async (req, res) =>{
    const respuesta = await marcaModel.find({});
    res.send(respuesta)
});

router.get("/marcas/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await marcaModel.findById(id);
    res.send(respuesta)
});

router.put("/marcas/:id", estaAutenticado, esAdmin, async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await marcaModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/marcas/:id", estaAutenticado, esAdmin, async (req, res) =>{
    const id = req.params.id;
    const respuesta = await marcaModel.deleteOne({_id: id})
    res.send(respuesta)
});

module.exports = router;