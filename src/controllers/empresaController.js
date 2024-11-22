const empresaService = require('../services/empresaServices');

const empresaController = {
    async create(req, res) {
        try {
            const empresa = await empresaService.create(req.body);
            res.status(201).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const empresas = await empresaService.getAll();
            res.status(200).json(empresas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const empresa = await empresaService.getById(req.params.id);
            if (!empresa) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedEmpresa = await empresaService.update(req.params.id, req.body);
            if (!updatedEmpresa) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(200).json(updatedEmpresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await empresaService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = empresaController;