const mongoose = require("mongoose");

const detallePedidoSchema = new mongoose.Schema(
    {
        producto_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productos",
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            min: 1
        },
        precio_unitario: {
            type: Number,
            required: true,
            min: 0,
        },
    }
);

const pedidoSchema = new mongoose.Schema(
    {
        cliente_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "usuarios",
            required: true
        },
        fecha_pedido: {
            type: Date,
            default: Date.now
        },
        total: {
            type: Number,
            required: true,
            min: 0
        },
        estado: {
            type: String,
            enum: ["Pendiente", "Enviado", "Entregado", "Cancelado"],
            required: true,
            default: "Pendiente"
        },
        direccion_envio: {
            type: String,
            required: true,
            trim: true
        },
        detalles: {
            type: [detallePedidoSchema],
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Pedido = mongoose.model("pedidos", pedidoSchema);
module.exports = Pedido;