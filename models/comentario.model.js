const mongoose = require("mongoose");

const comentarioSchema = new mongoose.Schema(
    {
        producto_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productos",
            required: true,
        },
        usuario_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "usuarios",
            required: true
        },
        comentario: {
            type: String,
            required: true,
            trim: true
        },
        comentario_padre_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comentarios",
            default: null
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "usuarios"
            },
        ],
        dislikes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "usuarios",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const comentarioModel = mongoose.model("Comentario", comentarioSchema);

module.exports = comentarioModel;