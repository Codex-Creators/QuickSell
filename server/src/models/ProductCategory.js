import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';
import Product from './Product.js';

export default class ProductCategory extends Model { }

ProductCategory.init(
    {
        COD_CATEGORIA: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOM_CATEGORIA: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: 'tab_categorias',
        freezeTableName: true,
        timestamps: false,
    }
);

ProductCategory.hasMany(Product, {foreignKey: 'COD_CATEGORIA', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
Product.belongsTo(ProductCategory, {foreignKey: 'COD_CATEGORIA', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'})