const {Router} = require("express");
const router = Router();

//Imports de los models
const usuarioModel = require("../models/usuario.model.js");
const categoriaModel = require("../models/categoria.model.js");
const marcaModel = require("../models/marca.model.js");
const productoModel = require("../models/producto.model.js");
const comentarioModel = require("../models/comentario.model.js");
const pedidoModel = require("../models/pedido.model.js");

router.get("/", (req, res) => {
    res.send("Bienvenidos a Patitas Felices!!!")
});

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

// CRUD Marcas
router.post("/marcas", async (req, res) =>{
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

router.put("/marcas/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await marcaModel.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

router.delete("/marcas/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await marcaModel.deleteOne({_id: id})
    res.send(respuesta)
});

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
