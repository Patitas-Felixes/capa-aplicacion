const {Router} = require("express");
const router = Router();

const authRouter = require("./auth.routes.js");
const usuarioRouter = require("./usuario.routes.js");
const categoriaRouter = require("./categoria.routes.js");
const marcaRouter = require("./marca.routes.js");
const productoRouter = require("./producto.routes.js");
const comentarioRouter = require("./comentario.routes.js");
const pedidoRouter = require("./pedido.routes.js");

router.use("/api/auth", authRouter);
router.use("/api/", usuarioRouter);
router.use("/api/", categoriaRouter);
router.use("/api/", marcaRouter);
router.use("/api/", productoRouter);
router.use("/api/", comentarioRouter);
router.use("/api/", pedidoRouter);

router.get("/", (req, res) => {
    res.send("Bienvenidos a Patitas Felices!!!")
});

module.exports = router;
