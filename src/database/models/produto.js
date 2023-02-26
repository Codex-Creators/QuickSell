import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

export class Produto extends Model {};

Produto.init(
    {
        COD_PRODUTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },

        DES_PRODUTO: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },

        VAL_PRECO_CUSTO: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },

        VAL_MARGEM_LUCRO: {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false,
        },

        VAL_PRECO_VENDA: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },

        QTD_ESTOQUE: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },

        DES_OBSERVACAO: {
            type: DataTypes.STRING(250),
            allowedNull: true,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_PRODUTOS",
        timestamps: true
    }
);
