const usuarioModel = require("../models/usuario.model.js");

exports.register = async (req, res) => {
    const { nombre, apellido, email, password, direccion } = req.body;
    try {
        const usuarioEncontrado = await usuarioModel.findOne({ email });
        if (usuarioEncontrado) {
            return res.status(409).json({ message: "El email ya está en uso" });
        }
        const nuevoUsuario = await usuarioModel.create({ nombre, apellido, email, password, direccion });

        res.status(201).json({
            message: "Usuario registrado exitosamente",
            usuario: nuevoUsuario.email
        });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Problema en el server" });

    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await usuarioModel.findOne({email});
        if (!usuario) {
            return res.status(401).json({
                message: "Email o contraseña incorrectos."
            });
        }

        const passwordCorrecto = await usuario.compararPassword(password);
        if (!passwordCorrecto) {
            return res.status(401).json({
                message: "Email o contraseña incorrectos."
            });
        }

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            usuario: usuario.email
        });
    } catch (error) {
        console.error("Error en el login: ", error);
        res.status(500).json({message: "Problema en el serveraa"});
    }

};

exports.logout = (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).json({ message: "Error al cerrar sesión" });
        res.status(200).json({ message: "Sesión cerrada" });
    });
};