import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';
import Provider from './Provider.js';
import Product from './Product.js';

export default class Purchase extends Model { }

Purchase.init(
    {
        COD_ENTRADA: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        NUM_NOTA_FISCAL: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        DTA_EMISSAO: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        VAL_FRETE: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        VAL_TOTAL: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        NUM_CNPJ_FORNECEDOR: {
            type: DataTypes.CHAR(14),
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: 'TAB_COMPRAS',
        freezeTableName: true,
        timestamps: false,
    }
);

Purchase.belongsTo(Provider, {foreignKey: 'NUM_CNPJ_FORNECEDOR', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
Provider.hasMany(Purchase, {foreignKey: 'NUM_CNPJ_FORNECEDOR', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});
