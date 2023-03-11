import Sell from "../models/Sell.js";

export default {
    async addSell(req, res) {
        let {
            sellId,
            sellDate,
            transport,
            totalValue,
            client,
            paymentMethod,
            user
        } = req.body;

        try {
            await Sell.create(
                {
                    COD_VENDA: sellId,
                    DTA_VENDA: sellDate,
                    VAL_FRETE: transport,
                    VAL_TOTAL: totalValue,
                    COD_CLIENTE: client,
                    COD_FORMA_PAGAMENTO: paymentMethod,
                    COD_USUARIO: user,
                }
            );

            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    }
}