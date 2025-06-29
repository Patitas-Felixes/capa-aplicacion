const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        apellido: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                , "Por favor, proporciona un email válido"]
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        direccion: {
            type: String,
            trim: true
        },
        es_admin: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const usuarioModel = mongoose.model("usuarios", usuarioSchema);

module.exports = usuarioModel;