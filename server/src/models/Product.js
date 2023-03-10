import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';
import ProductCategory from './ProductCategory.js';
import './ProductCategory.js';

export default class Product extends Model { }

Product.init(
    {
        COD_PRODUTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOM_PRODUTO: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        DES_UNIDADE_MEDIDA: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        VAL_PRECO: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },
        QTD_ESTOQUE: {
            type: DataTypes.DECIMAL(15, 5),
            allowNull: false,
            defaultValue: 0,
        },
        DES_PRODUTO: {
            type: DataTypes.STRING(400),
            allowNull: true,
        },
        COD_CATEGORIA: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: 'tab_produtos',
        freezeTableName: true,
        timestamps: false,
    }
);
