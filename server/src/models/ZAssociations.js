import Client from "./Client.js";
import PaymentMethod from "./PaymentMethod.js";
import Product from "./Product.js";
import ProductCategory from "./ProductCategory.js";
import Provider from './Provider.js';
import Purchase from './Purchase.js';
import PurchaseItem from "./PurchaseItem.js";
import Sell from "./Sell.js";
import SellItem from './SellItem.js';
import User from "./User.js";


//PURCHASE ASSOCIATION
Purchase.belongsToMany(Product, { through: PurchaseItem });
Product.belongsToMany(Purchase, { through: PurchaseItem });

//PRODUCTS CATEGORY ASSOCIATION
ProductCategory.hasMany(Product, { foreignKey: 'COD_CATEGORIA', onDelete: 'RESTRICT', onUpdate: 'RESTRICT' });
Product.belongsTo(ProductCategory, { foreignKey: 'COD_CATEGORIA', onDelete: 'RESTRICT', onUpdate: 'RESTRICT' });

// SELL ASSOCIATIONS
User.hasMany(Sell, { foreignKey: 'COD_USUARIO', onDelete: 'RESTRICT', onUpdate: 'RESTRICT' });
PaymentMethod.hasMany(Sell, { foreignKey: 'COD_FORMA_PAGAMENTO', onDelete: 'RESTRICT', onUpdate: 'RESTRICT' });
Client.hasMany(Sell, {foreignKey: 'COD_CLIENTE', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});

Sell.belongsToMany(Product, { through: SellItem });
Product.belongsToMany(Sell, { through: SellItem });
