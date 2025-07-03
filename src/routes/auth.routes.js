const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth.controller.js");
const { estaAutenticado, esAdmin } = require("../middlewares/auth.middleware.js");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Para probar que funciona el permiso
router.get("/admin", estaAutenticado, esAdmin, (req, res) => {
    res.json({ message: "Autenticado y admin" });
});

module.exports = router;