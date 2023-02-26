import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

import { Venda } from "./venda.js";

export class Cliente extends Model {};

Cliente.init(
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
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_CLIENTES",
        timestamps: true
    }
);

Cliente.hasMany(Venda, {
    foreignKey: "COD_VENDA",
    as: "COD_VENDA",
});