import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

export class Venda extends Model {};

Venda.init(
    {
        COD_VENDA: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        //common columns
        DTA_VENDA: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        VAL_FRETE: {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false,
        },

        VAL_SUBTOTAL: {
            type: DataTypes.DataTypes.DECIMAL(15,2),
            allowNull: false,
        },

        VAL_DESCONTO: {
            type: DataTypes.DataTypes.DECIMAL(15,2),
            allowNull: false,
        },

        VAL_TOTAL: {
            type: DataTypes.DataTypes.DECIMAL(15,2),
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_VENDAS",
        timestamps: true,
    }
);