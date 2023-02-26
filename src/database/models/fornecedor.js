import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

export class Fornecedor extends Model {};

Fornecedor.init(
    {
        NUM_CNPJ_FORNECEDOR: {
            type: DataTypes.CHAR(14),
            primaryKey: true,
        },
        //common column
        NOM_FANTASIA: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        NOM_RAZAO_SOCIAL: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        NUM_CONTATO: {
            type: DataTypes.STRING(11),
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_FORNECEDORES",
        timestamps: true
    }
);