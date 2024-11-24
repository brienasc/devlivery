// services/desenvolvedorService.js
const { Desenvolvedor, Tecnologia, Idioma, Candidatura, Projeto, Endereco } = require('../models');
const bcrypt = require('bcrypt');

const desenvolvedorService = {
    async register(data) {
        data.senha = await bcrypt.hash(data.senha, 10);
        return await Desenvolvedor.create(data);
    },

    async login(email, senha) {
        const desenvolvedor = await Desenvolvedor.findOne({ where: { email } });
        if (!desenvolvedor || !(await bcrypt.compare(senha, desenvolvedor.senha))) {
            return null;
        }
        return desenvolvedor;
    },

    async updateProfile(id, data) {
        const desenvolvedor = await Desenvolvedor.findByPk(id);
        if (!desenvolvedor) return null;
        return await desenvolvedor.update(data);
    },

    async changePassword(id, senhaAtual, novaSenha) {
        const desenvolvedor = await Desenvolvedor.findByPk(id);
        if (!desenvolvedor || !(await bcrypt.compare(senhaAtual, desenvolvedor.senha))) {
            return false;
        }
        desenvolvedor.senha = await bcrypt.hash(novaSenha, 10);
        await desenvolvedor.save();
        return true;
    },
    
    async getProfile(id) {
        return await Desenvolvedor.findByPk(id, {
            include: [
                { model: Tecnologia },
                { model: Idioma },
                { model: Endereco, attributes: ['cidade', 'estado' ] }
            ]
        });
    },
    async updateProfilePicture(id, fotoPerfil) {
        const desenvolvedor = await Desenvolvedor.findByPk(id);
        if (!desenvolvedor) return null;
        desenvolvedor.foto_perfil = fotoPerfil;
        await desenvolvedor.save();
        return desenvolvedor;
    },
    async getAvailableProjects() {
        return await Projeto.findAll({ where: { status: 'aberto' } });
    },
    async getAppliedProjects(idDesenvolvedor) {
        return await Candidatura.findAll({
            where: { id_desenvolvedor: idDesenvolvedor },
            include: [{ model: Projeto }]
        });
    },
    async applyForProject(idDesenvolvedor, idProjeto) {
        return await Candidatura.create({ id_desenvolvedor: idDesenvolvedor, id_projeto: idProjeto, status: 'pendente' });
    }
};

module.exports = desenvolvedorService;