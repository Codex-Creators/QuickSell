import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";
import { Venda } from "./venda.js";

export class Usuario extends Model {};

Usuario.init(
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

        VAL_ADMIN: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_USUARIOS",
        timestamps: true,
    }
);

Usuario.hasMany(Venda, {
    foreignKey: "COD_VENDA",
    as: "COD_VENDA",
});