import Provider from "../models/Provider.js";
import { Op } from "sequelize";

export default {

    async addProvider(req, res) {
        let { cnpjNumber, fantasyName, realName, contactNumber } = req.body;
        try {
            await Provider.create({ NUM_CNPJ_FORNECEDOR: cnpjNumber, NOM_FANTASIA: fantasyName, NOM_RAZAO_SOCIAL: realName, NUM_TELEFONE: contactNumber });
            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async showProviders(req, res) {
        let { fantasyName } = req.query;


        try {
            let providers = await Provider.findAll({ order: ['NOM_FANTASIA'], where: { NOM_FANTASIA: { [Op.substring]: fantasyName } } });
            res.send(providers);
        } catch (error) {
            console.log(error);
        }

        return;
    },

    async updateProvider(req, res) {
        let { cnpjNumber, fantasyName, realName, contactNumber } = req.body;
        try {
            await Provider.update(
                {
                    NUM_CNPJ_FORNECEDOR: cnpjNumber,
                    NOM_FANTASIA: fantasyName,
                    NOM_RAZAO_SOCIAL: realName,
                    NUM_TELEFONE: contactNumber
                },
                {
                    where: { NUM_CNPJ_FORNECEDOR: cnpjNumber }
                }
            );
            console.log('Editado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async deleteProvider(req, res) {
        let { cnpj } = req.params;

        try {
            await Provider.destroy({ where: { NUM_CNPJ_FORNECEDOR: cnpj } });
            console.log('Deletado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },
}