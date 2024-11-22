const enderecoService = require('../services/enderecoServices');

const enderecoController = {
    async create(req, res) {
        try {
            const endereco = await enderecoService.create(req.body);
            res.status(201).json(endereco);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const enderecos = await enderecoService.getAll();
            res.status(200).json(enderecos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const endereco = await enderecoService.getById(req.params.id);
            if (!endereco) return res.status(404).json({ message: "Endereço não encontrado" });
            res.status(200).json(endereco);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedEndereco = await enderecoService.update(req.params.id, req.body);
            if (!updatedEndereco) return res.status(404).json({ message: "Endereço não encontrado" });
            res.status(200).json(updatedEndereco);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await enderecoService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Endereço não encontrado" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = enderecoController;