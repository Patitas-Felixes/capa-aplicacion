const {Router} = require("express");
const router = Router();

// Importamos el modelo
const productoModel = require("../models/producto.model.js");

// CRUD Productos
router.post("/productos", async (req, res) =>{
    const body = req.body;
    const respuesta = await productoModel.create(body);
    res.send(respuesta)
});

router.get("/productos", async (req, res) =>{
    const respuesta = await productoModel.find({});
    res.send(respuesta)
});

router.get("/productos/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await productoModel.findById(id);
    res.send(respuesta)
});

router.put("/productos/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await productoModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/productos/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await productoModel.deleteOne({_id: id})
    res.send(respuesta)
});

module.exports = router;
