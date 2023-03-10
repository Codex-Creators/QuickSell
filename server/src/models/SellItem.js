import { DataTypes } from "sequelize";
import connection from "../database/database";
import Sell from "./Sell";
import Product from "./Product";
import Sell from "./Sell";

export default class SellItem extends Model { }


SellItem.init(
    {
        COD_VENDA: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: 'TAB_VENDAS', key: 'COD_VENDA' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },

        COD_PRODUTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: 'TAB_PRODUTOS', key: 'COD_PRODUTO' },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        },
        QTD_PRODUTO: {
            type: DataTypes.DECIMAL(15, 5),
            allowNull: false
        },
        VAL_DESCONTO: {
            type: DataTypes.DECIMAL(15, 5),
            allowNull: false
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        modelName: 'tab_produtos_vendas',
        freezeModelName: true
    }
);

Sell.belongsToMany(Product, { through: SellItem });
Product.belongsToMany(Sell, { through: SellItem });

