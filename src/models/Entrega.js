const mongoose = require('mongoose');

const EntregaSchema = new mongoose.Schema({
    entregador: {
        type: String,
        default: "",
    },
    produto: String,
    valor: Number,
    vendedor: String,
    status: {
        type: String,
        default: "Pendente",
    },
    cliente:String,
    enderecoEntrega: String,
    telefoneCliente: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Entrega', EntregaSchema);