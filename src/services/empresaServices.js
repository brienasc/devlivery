const { Empresa, Projeto, Candidatura, Desenvolvedor, Endereco } = require('../models');
const bcrypt = require('bcrypt');

const empresaService = {
    async register(data) {
        data.senha = await bcrypt.hash(data.senha, 10);
        return await Empresa.create(data);
    },

    async login(email, senha) {
        const empresa = await Empresa.findOne({ where: { email } });
        if (!empresa || !(await bcrypt.compare(senha, empresa.senha))) {
            return null;
        }
        return empresa;
    },

    async updateProfile(id, data) {
        const empresa = await Empresa.findByPk(id);
        if (!empresa) return null;
        return await empresa.update(data);
    },

    async changePassword(id, senhaAtual, novaSenha) {
        const empresa = await Empresa.findByPk(id);
        if (!empresa || !(await bcrypt.compare(senhaAtual, empresa.senha))) {
            return false;
        }
        empresa.senha = await bcrypt.hash(novaSenha, 10);
        await empresa.save();
        return true;
    },

    async getProfile(id) {
        return await Empresa.findByPk(id, {
            include: [
                { model: Projeto },
                { model: Endereco, attributes: ['cidade', 'estado' ] }
            ]
        });
    },

    async updateProfilePicture(id, fotoPerfil) {
        const empresa = await Empresa.findByPk(id);
        if (!empresa) return null;
        empresa.foto_perfil = fotoPerfil;
        await empresa.save();
        return empresa;
    },

    async createProject(idEmpresa, projectData) {
        return await Projeto.create({ ...projectData, id_empresa: idEmpresa });
    },
    
    async getCandidatesByProject(id_projeto) {
        return await Candidatura.findAll({
            where: { id_projeto },
            include: [{ model: Desenvolvedor, as: 'desenvolvedor' }]
        });
    },
    
    async updateCandidatureStatus(idCandidatura, status) {
        const candidatura = await Candidatura.findByPk(idCandidatura);
        if (!candidatura) return null;
        candidatura.status = status;
        await candidatura.save();
        return candidatura;
    }
};

module.exports = empresaService;