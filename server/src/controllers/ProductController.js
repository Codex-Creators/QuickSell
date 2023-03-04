import Product from "../models/Product.js";
import { QueryTypes } from "sequelize";
import ProductCategory from "../models/ProductCategory.js";

export default {
    async addProduct(req, res) {
        let {
            name,
            unitOfMeasurement,
            price,
            notes,
            category
        } = req.body;

        try {
            await Product.create({
                NOM_PRODUTO: name,
                DES_UNIDADE_MEDIDA: unitOfMeasurement,
                VAL_PRECO: price,
                DES_PRODUTO: notes,
                COD_CATEGORIA: category
            });
            res.send('Produto cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async showProducts(req, res) {
        try {
            let products = await Product.findAll({
                attributes: [
                    'COD_PRODUTO', 'NOM_PRODUTO', 'VAL_PRECO', 'QTD_ESTOQUE',
                    'TAB_CATEGORIA.NOM_CATEGORIA'
                ],
                include: [{
                    model: ProductCategory,
                    required: true,
                    attributes: [],
                }],
                raw: true,
            });

            res.send(products);
        } catch (error) {
            console.log(error);
        }
    },


    async updateProduct(req, res) {
        let { id } = req.params;
        let {
            name,
            unitOfMeasurement,
            price,
            notes,
            category
        } = req.body;

        try {
            await Product.update(
                {
                    NOM_PRODUTO: name,
                    DES_UNIDADE_MEDIDA: unitOfMeasurement,
                    VAL_PRECO: price,
                    DES_PRODUTO: notes,
                    COD_CATEGORIA: category
                },
                {
                    where: { COD_PRODUTO: id }
                }
            );
            res.send('Editado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async deleteProduct(req, res) {
        let { id } = req.params;
        
        try {
            await Product.destroy({where: {COD_PRODUTO: id}});
            res.send('Deletado com sucesso');
        } catch(error) {
            console.log(error);
        }
    }
}