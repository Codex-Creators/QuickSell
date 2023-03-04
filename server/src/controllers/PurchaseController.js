import Purchase from '../models/Purchase.js';

export default {
    
    async addPurchase(req, res) {
        let {
            purchaseId,
            fiscalNoteNumber,
            fiscalNoteDate,
            transportValue,
            totalValue,
            cnpjNumber
        } = req.body;

        try {
            await Purchase.create({
                COD_ENTRADA: purchaseId,
                NUM_NOTA_FISCAL: fiscalNoteNumber,
                DTA_EMISSAO: fiscalNoteDate,
                VAL_FRETE: transportValue,
                VAL_TOTAL: totalValue,
                NUM_CNPJ_FORNECEDOR: cnpjNumber,
            });
            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },
    async showPurchases(req, res) {
        try {
            let purchases = await Purchase.findAll();
            res.send(purchases);
        } catch (error) {
            console.log(error);
        }
    },

    async deletePurchase(req, res) {
        let { id } = req.params;
        try {
            await Purchase.destroy({ where: { COD_ENTRADA: id } });
            res.send('Deletado com sucesso');
        } catch (error) {
            console.log(error);
        }
    },

    async updatePurchase(req, res) {
        let { id } = req.params;
        let {
            fiscalNoteNumber,
            fiscalNoteDate,
            transportValue,
            totalValue,
            cnpjNumber
        } = req.body;
        try {
            await Purchase.update(
                {
                    NUM_NOTA_FISCAL: fiscalNoteNumber,
                    DTA_EMISSAO: fiscalNoteDate,
                    VAL_FRETE: transportValue,
                    VAL_TOTAL: totalValue,
                    NUM_CNPJ_FORNECEDOR: cnpjNumber,
                },
                {
                    where: { COD_ENTRADA: id }
                }
            );
            res.send('Editado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    }
}