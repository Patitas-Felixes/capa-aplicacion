const {Router} = require("express");
const router = Router();

// Importamos el modelo
const pedidoModel = require("../models/pedido.model.js");

// CRUD Pedidos
router.post("/pedidos", async (req, res) =>{
    const body = req.body;
    const respuesta = await pedidoModel.create(body);
    res.send(respuesta)
});

router.get("/pedidos", async (req, res) =>{
    const respuesta = await pedidoModel.find({});
    res.send(respuesta)
});

router.get("/pedidos/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await pedidoModel.findById(id);
    res.send(respuesta)
});

router.put("/pedidos/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await pedidoModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/pedidos/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await pedidoModel.deleteOne({_id: id})
    res.send(respuesta)
});

module.exports = router;
