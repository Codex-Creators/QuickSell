import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';
import Product from './Product.js';
import Purchase from './Purchase.js';

export default class PurchaseItem extends Model { }

PurchaseItem.init(
    {
        COD_PRODUTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Product, key: 'COD_PRODUTO' },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
        },

        COD_ENTRADA: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Purchase, key: 'COD_ENTRADA' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },

        VAL_PRECO_CUSTO: {
            type: DataTypes.DECIMAL(15, 5),
            allowNull: false,
        },

        QTD_PRODUTO: {
            type: DataTypes.DECIMAL(15, 5),
            allowNull: false,
        },
        VAL_DESCONTO: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: 'TAB_CATEGORIAS',
        freezeTableName: true,
        timestamps: false,
    }
);

Purchase.belongsToMany(Product, {through: PurchaseItem});
Product.belongsToMany(Purchase, {through: PurchaseItem});