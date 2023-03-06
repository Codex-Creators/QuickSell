import User from '../models/User.js';
import bcrypt from 'bcrypt';

export default {
    async addUser(req, res) {
        let { email, password } = req.body;
        let salt = 8;

        try {
            let passwordHash = await bcrypt.hash(password, salt);

            User.create({ DES_EMAIL: email, DES_SENHA: passwordHash });

            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },


    async login(req, res) {
        let { email, password } = req.body;
        let existentUser = await User.findOne({ where: { DES_EMAIL: email } });
        if (!existentUser) return res.send('Usuário não encontrado!');
        let isValidPassword = await bcrypt.compare(password, existentUser.DES_SENHA);
        if (isValidPassword) return res.send('Login realizado');
        res.send('Acesso negado!');
    }
}