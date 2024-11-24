const enderecoServices = require('../services/enderecoServices');

const enderecoController = {
    async getAllEnderecos(req, res) {
        try {
            const enderecos = await enderecoServices.getAll();
            res.status(200).json(enderecos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = enderecoController;