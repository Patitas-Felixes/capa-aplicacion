const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        descripcion: {
            type: String,
            required: false,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const categoriaModel = mongoose.model("categorias", categoriaSchema);

module.exports = categoriaModel;