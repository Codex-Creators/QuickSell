import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

import { Venda } from "./venda.js";
import { Produto } from "./produto.js";

export class ItemVenda extends Model {};

ItemVenda.init(
    {
        //common column
        QTD_PRODUTO: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_ITEM_VENDA",
        timestamps: true
    }
);