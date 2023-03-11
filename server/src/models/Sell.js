import { DataTypes, Model } from "sequelize";
import connection from '../database/database.js';
import PaymentMethod from './PaymentMethod.js';
import Client from './Client.js';
import User from './User.js';

export default class Sell extends Model {}

Sell.init(
    {
        COD_VENDA:  {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        DTA_VENDA: {
            type: DataTypes.DATE,
            defaultValue: 'CURRENT_TIMESTAMP',
            allowNull: false
        },
        VAL_FRETE: {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false
        },
        VAL_TOTAL: {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false
        },
        COD_CLIENTE: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        COD_FORMA_PAGAMENTO: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        COD_USUARIO: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, 
    {
        sequelize: connection,
        modelName: 'tab_vendas',
        timestamps: false,
        freezeModelName: true,
    }
);

