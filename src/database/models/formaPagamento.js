import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";
import { Venda } from "./venda.js";

export class FormaPagamento extends Model {};

FormaPagamento.init(
    {
        COD_FORMA_PAGAMENTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        NOM_FORMA_PAGAMENTO: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_FORMA_PAGAMENTO",
        timestamps: true
    }
);

FormaPagamento.hasMany(Venda, {
    foreignKey: "COD_VENDA",
    as: "COD_VENDA",
});