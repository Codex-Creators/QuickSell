import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';
import '../models/Sell.js'
import Sell from './Sell.js';
export default class PaymentMethod extends Model { }

PaymentMethod.init(
    {
        COD_FORMA_PAGAMENTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOM_FORMA_PAGAMENTO: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: 'tab_formas_pagamento',
        freezeTableName: true,
        timestamps: false,
    }
);


PaymentMethod.hasMany(Sell, {foreignKey: 'COD_FORMA_PAGAMENTO', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});