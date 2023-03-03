import Product from "../models/Product.js";
import { QueryTypes } from "sequelize";
import ProductCategory from "../models/ProductCategory.js";

export default {
    async addProduct(req, res) {
        let { description, profit, sellValue, notes, category } = req.body;
    
        try {
            let product = await Product.create({
                NOM_PRODUTO: description,
                VAL_MARGEM_LUCRO: profit,
                VAL_PRECO: sellValue,
                DES_PRODUTO: notes,
                COD_CATEGORIA: category
            });
            res.send(product);
        } catch (error) {
            console.log(error);
        }
    },

    async showProducts(req, res) {
        try {
            let products = await Product.findAll({
                attributes: [
                    'COD_PRODUTO', 'NOM_PRODUTO', 'VAL_MARGEM_LUCRO', 'VAL_PRECO', 'QTD_ESTOQUE',
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
    }
}

Product.belongsTo(ProductCategory, {foreignKey: 'COD_CATEGORIA',onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});