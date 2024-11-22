const usuarioService = require('../services/usuarioServices');

const usuarioController = {
    async create(req, res) {
        try {
            const usuario = await usuarioService.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const usuario = await usuarioService.getAll();
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const usuario = await usuarioService.getById(req.params.id);
            if (!usuario) return res.status(404).json({ message: "Usuário não encontrado" });
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedUsuario = await usuarioService.update(req.params.id, req.body);
            if (!updatedUsuario) return res.status(404).json({ message: "Usuário não encontrado" });
            res.status(200).json(updatedUsuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await usuarioService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Usuário não encontrado" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = usuarioController;