const mongoose = require("mongoose");

const marcaSchema = new mongoose.Schema({
    nombre: {
        type: String, required: true, unique: true, trim: true
    }
}, {
    timestamps: true, versionKey: false
})

const marcaModel = mongoose.model("Marca", marcaSchema);

module.exports = marcaModel;