import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

import { Produto } from "./produto.js";
import { Fornecedor} from "./fornecedor.js";

export class ItemEntrada extends Model {};

ItemEntrada.init(
    {
        //common column
        VAL_PRECO_CUSTO: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },
        
        QTD_PRODUTO: {
            type: DataTypes.DECIMAL(15,5),
            allowNull: false,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_ITEM_ENTRADAS",
        timestamps: true
    }
);