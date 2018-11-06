const Entrega = require('../models/Entrega');

module.exports = {
    async index(req, res) {
        const entregas = await Entrega.find({}).sort('-createdAt');

        return res.json(entregas);
    },

    async store(req, res) {
        const entrega = await Entrega.create(req.body);

        req.io.emit('entrega', entrega);
        return res.json(entrega);
    },

    async aceitar(req, res) {
        const entrega = await Entrega.findById(req.params.id);

        entrega.set({ entregador: req.body.entregador, status: req.body.status });

        await entrega.save();
        req.io.emit('aceito', entrega);
        return res.json(entrega);
    }
};