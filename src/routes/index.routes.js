const {Router} = require("express");
const router = Router();
const ModelUser = require("../userModel.js");

router.get("/", (req, res) => {
    res.send("Bienvenidos a Alumn@s!!!")
});

module.exports = router;

// CRUD - Crear
router.post("/user", async (req, res) =>{
    const body = req.body; //Recibe el Body del Ciente
    const respuesta = await ModelUser.create(body); //Crea en la collection de BD
    res.send(respuesta) //Muestra contenido
});

// CRUD - Read | Listar
router.get("/user", async (req, res) =>{
    //const body = req.body;
    const respuesta = await ModelUser.find({});
    res.send(respuesta)
});

// CRUD - Read One | Listar Uno
router.get("/user/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id: id});
    res.send(respuesta)
});

// CRUD - Update | Actualizar
router.put("/user/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body);
    res.send(respuesta)
});

// CRUD - Delete | Eliminar
router.delete("/user/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id})
    res.send(respuesta)
});
