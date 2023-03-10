import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';
import Sell from './Sell.js';

export default class Client extends Model { }

Client.init(
    {
        COD_CLIENTE: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOM_CLIENTE: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        DES_EMAIL: {
            type: DataTypes.STRING(100),
            defaultValue: 'N',
            unique: true,
        }
    },
    {
        sequelize: connection,
        modelName: 'tab_clientes',
        freezeTableName: true,
        timestamps: false,
    }
);

Client.hasMany(Sell, {foreignKey: 'COD_CLIENTE', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});