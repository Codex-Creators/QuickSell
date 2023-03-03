import express from 'express';
import ProductCategoryController from './controllers/ProductCategoryController.js';
import ProductController from './controllers/ProductController.js';
import ProviderController from './controllers/ProviderController.js';
export const routes = express.Router();


routes.get('/products', ProductController.showProducts);
routes.post('/products', ProductController.addProduct);
routes.post('/products/categories', ProductCategoryController.addProductCategory);
routes.get('/products/categories', ProductCategoryController.showProductCategories);

routes.delete('/products/categories', ProductCategoryController.deleteProductCategory);

routes.get('/providers', ProviderController.showProviders);
routes.post('/providers', ProviderController.addProvider);
routes.put('/providers/:cnpj', ProviderController.updateProvider);
routes.delete('/providers/:cnpj', ProviderController.deleteProvider);