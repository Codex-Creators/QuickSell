import ProductCategory from '../models/ProductCategory.js';

export default {
    async addProductCategory(req, res) {
        let { productCategoryName } = req.body;

        try {
            await ProductCategory.create({ NOM_CATEGORIA: productCategoryName });
            res.send('Cadastrado com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async showProductCategories(req, res) {

        try {
            let productCategories = await ProductCategory.findAll();
            res.send(productCategories);
        } catch (error) {
            console.log(error);
        }

    },

    async updateProductCategory(req, res) {
        let { id } = req.params;
        let { productCategoryName } = req.body;

        try {
            await ProductCategory.update({ NOM_CATEGORIA: productCategoryName }, { where: { COD_CATEGORIA: id } });
            res.send('Editada com sucesso!');
        } catch (error) {
            console.log(error);
        }
    },

    async deleteProductCategory(req, res) {
        let { id } = req.params;
        try {
            await ProductCategory.destroy({ where: { id: id } })
            res.send('Deletada com sucesso!');
        } catch (error) {
            console.log(error);
        }
    }
}