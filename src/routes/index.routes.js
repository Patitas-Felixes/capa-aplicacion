const {Router} = require("express");
const router = Router();

const authRouter = require("./auth.routes.js");
const usuarioRouter = require("./usuario.routes.js");
const categoriaRouter = require("./categoria.routes.js");
const marcaRouter = require("./marca.routes.js");
const productoRouter = require("./producto.routes.js");
const comentarioRouter = require("./comentario.routes.js");
const pedidoRouter = require("./pedido.routes.js");

router.use("/auth", authRouter);
router.use('/', usuarioRouter);
router.use('/', categoriaRouter);
router.use('/', marcaRouter);
router.use('/', productoRouter);
router.use('/', comentarioRouter);
router.use('/', pedidoRouter);

router.get("/", (req, res) => {
    res.send("Bienvenidos a Patitas Felices!!!")
});

module.exports = router;
