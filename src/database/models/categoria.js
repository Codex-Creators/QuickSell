import { sequelizeConnection } from "../databaseConfiguration.js";
import { Model, DataTypes } from "sequelize";

import { Produto } from "./produto.js";

export class Categoria extends Model {};

Categoria.init(
    {
        COD_CATEGORIA: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        NOM_CATEGORIA: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
    },

    {
        sequelize: sequelizeConnection,
        modelName: "TAB_CATEGORIAS",
        timestamps: true,
    },
);

Categoria.hasMany(Produto, {
    foreignKey: "COD_PRODUTO",
    as: "COD_PRODUTO",
});