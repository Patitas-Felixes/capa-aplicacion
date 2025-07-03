const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

usuarioSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }

        const salt = await bcrypt.genSalt(10);

        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

usuarioSchema.methods.compararPassword = async function (passwordIngresada) {
    return await bcrypt.compare(passwordIngresada, this.password);
}

const usuarioModel = mongoose.model("usuarios", usuarioSchema);

module.exports = usuarioModel;