import express from 'express';
import ClientController from './controllers/ClientController.js';
import PaymentMethodController from './controllers/PaymentMethodController.js';
import ProductCategoryController from './controllers/ProductCategoryController.js';
import ProductController from './controllers/ProductController.js';
import ProviderController from './controllers/ProviderController.js';
import PurchaseController from './controllers/PurchaseController.js';
import UserController from './controllers/UserController.js';
export const routes = express.Router();


routes.get('/products', ProductController.showProducts);
routes.post('/products', ProductController.addProduct);
routes.put('/products/:id', ProductController.updateProduct);
routes.delete('/products/:id', ProductController.deleteProduct);

routes.post('/products/categories', ProductCategoryController.addProductCategory);
routes.get('/products/categories', ProductCategoryController.showProductCategories);
routes.put('/products/categories/:id', ProductCategoryController.updateProductCategory);
routes.delete('/products/categories/:id', ProductCategoryController.deleteProductCategory);

routes.get('/providers', ProviderController.showProviders);
routes.post('/providers', ProviderController.addProvider);
routes.put('/providers/:cnpj', ProviderController.updateProvider);
routes.delete('/providers/:cnpj', ProviderController.deleteProvider);

routes.post('/purchases', PurchaseController.addPurchase);
routes.get('/purchases', PurchaseController.showPurchases);
routes.put('/purchases/:id', PurchaseController.updatePurchase);
routes.delete('/purchases/:id', PurchaseController.deletePurchase);

routes.post('/clients', ClientController.addClient);
routes.get('/clients', ClientController.showClients);
routes.put('/clients/:id', ClientController.updateClient);
routes.delete('/clients/:id', ClientController.deleteClient);


routes.post('/paymentMethods', PaymentMethodController.addPaymentMethod);
routes.get('/paymentMethods', PaymentMethodController.showPaymentMethods);
routes.put('/paymentMethods/:id', PaymentMethodController.updatePaymentMethod);
routes.delete('/paymentMethods/:id', PaymentMethodController.deletePaymentMethod);

routes.post('/users', UserController.addUser);
routes.post('/login', UserController.login);