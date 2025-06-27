const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        descripcion: {
            type: String,
            required: true,
            trim: true
        },
        precio: {
            type: Number,
            required: true,
            min: 0
        },
        stock: {
            type: Number,
            required: true,
            min: 0
        },
        id_categoria: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categoria",
            required: true
        },
        id_marca: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Marca",
            required: true
        },
        imagen_url: {
            type: String,
            trim: true,
            default: "default-image.png"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const productoModel = mongoose.model("Producto", productoSchema);

module.exports = productoModel;