import ProductCategory from '../models/ProductCategory.js';

export default {
    async addProductCategory(req, res) {
        let { productCategoryName } = req.body;

        try {
            let newProductCategory = await ProductCategory.create({ NOM_CATEGORIA: productCategoryName });
            console.log(newProductCategory);
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

    async deleteProductCategory(req, res) {
        let { id } = req.params;

        try {
            await ProductCategory.destroy({where: {id: id}})

        } catch (error) {

        }

    }
}