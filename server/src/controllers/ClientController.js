import Client from '../models/Client.js';

export default {
    async addClient(req, res) {
        let { name, email } = req.body;

        try {
            await Client.create({ NOM_CLIENTE: name, DES_EMAIL: email });
            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async showClients(req, res) {
        try {
            let clients = await Client.findAll();
            res.send(clients);
        } catch (error) {
            console.log(error);
        }
    },

    async updateClient(req, res) {
        let { id } = req.params;
        let { name, email } = req.body;

        try {
            await Client.update({ NOM_CLIENTE: name, DES_EMAIL: email }, { where: { COD_CLIENTE: id } });
            res.send('Editado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async deleteClient(req, res) {
        let { id } = req.params;

        try {
            await Client.destroy({where: {COD_CLIENTE: id}});
            res.status(200).send('Deletado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    }
}