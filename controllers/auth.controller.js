const jwt = require("jsonwebtoken");
const userModel = require("../models/usuario.model.js");
const { jwtSecret } = require("../src/config.js");

exports.register = async (req, res) => {
    const { nombre, apellido, email, password, direccion } = req.body;
    try {
        const usuario = await userModel.findOne({ email: email});

        // usuario encontrado
        if (usuario) {
            // 409: conflict
            return res.status(409).json({
                message: "El email ya existe"
            });
        }

        const nuevoUsuario = new userModel({
            nombre,
            apellido,
            email,
            password,
            direccion,
            es_admin: false
        });

        await nuevoUsuario.save();

        // 201: created
        return res.status(201).json({
            message: "Usuario creado correctamente",
            usuario: {
                id: nuevoUsuario._id,
                nombre: nuevoUsuario.nombre,
                apellido: nuevoUsuario.apellido,
                email: nuevoUsuario.email,
                direccion: nuevoUsuario.direccion,
            },

        });
    } catch (err) {
        res.status(500).json({
                message: "Error interno del servidor",
                error: err.message
            }
        )
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await userModel.findOne({ email });
        if (!usuario) {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }

        if (usuario.password !== password) {
            return res.status(401).json({
                    message: "Contraseña incorrecta"
                }
            )
        }

        const token = jwt.sign(
            { id: usuario._id, esAdmin: usuario.esAdmin},
            jwtSecret,
            { expiresIn: "3h"}
        );

        res.status(200).json({
            message: "Login correcto",
            token: token,
            email: usuario.email
        });
    } catch (err) {
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}