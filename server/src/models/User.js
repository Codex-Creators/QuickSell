import { Model, DataTypes } from "sequelize";
import connection from "../database/database.js";

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
            type: DataTypes.STRING(45),
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
        modelName: 'TAB_USUARIOS',
        freezeTableName: true,
        timestamps: false,
    }
);