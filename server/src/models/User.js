import { Model, DataTypes } from "sequelize";
import connection from "../database/database.js";
import Sell from "./Sell.js";

export default class User extends Model { }

User.init(
    {
        COD_USUARIO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        DES_EMAIL: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },

        DES_SENHA: {
            type: DataTypes.TEXT(400),
            allowNull: false,
        },

        SIT_USUARIO: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '0',
        }
    },
    {
        sequelize: connection,
        modelName: 'tab_usuarios',
        freezeTableName: true,
        timestamps: false,
    }
);

User.hasMany(Sell, {foreignKey: 'COD_USUARIO', onDelete: 'RESTRICT', onUpdate: 'RESTRICT'});