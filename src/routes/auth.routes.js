const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth.controller.js");
const { estaAutenticado, esAdmin } = require("../middlewares/auth.middleware.js");
const passport = require("passport");

router.post("/register", register);
// router.post("/login", login);
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.status(200).json({
        message: "Sesión iniciada",
        _id: req.user._id,
        usuario: req.user.email,
        es_admin: req.user.es_admin
    });
});
router.post("/logout", logout);

// Para probar que funciona el permiso
router.get("/admin", estaAutenticado, esAdmin,(req, res) => {
    console.log(req.usuario);
    res.json({ message: "Autenticado y admin" });
});

module.exports = router;