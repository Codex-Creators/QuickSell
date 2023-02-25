import { Model, DataTypes } from "sequelize";
import connection from "../database/database.js";

export default class User extends Model { }

User.init(
    {
        cod_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        des_email: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },

        des_senha: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    },

    {
        sequelize: connection,
        modelName: 'tab_usuario',
        freezeTableName: true,
        timestamps: false,
    }
);