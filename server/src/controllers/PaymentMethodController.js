import PaymentMethod from '../models/PaymentMethod.js';

export default {
    async addPaymentMethod(req, res) {
        let { name } = req.body;
        try {
            PaymentMethod.create({ NOM_FORMA_PAGAMENTO: name });
            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async showPaymentMethods(req, res) {
        try {
            let paymentMethods = await PaymentMethod.findAll();
            res.send(paymentMethods);
        } catch (error) {
            console.log(error);
        }
    },

    async updatePaymentMethod(req, res) {
        let { id } = req.params;
        let { name } = req.body;
        try {
            await PaymentMethod.update({ NOM_FORMA_PAGAMENTO: name }, { where: { COD_FORMA_PAGAMENTO: id } });
            res.send('Editado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async deletePaymentMethod(req, res) {
        let { id } = req.params;
        try {
            await PaymentMethod.destroy({ where: { COD_FORMA_PAGAMENTO: id } });
            res.send('Deletado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    }
}