import { Model, DataTypes } from 'sequelize';
import connection from '../database/database.js';


export default class Provider extends Model { }

Provider.init(
    {
        NUM_CNPJ_FORNECEDOR:{
            type: DataTypes.CHAR(14),
            primaryKey: true,
        },
        NOM_FANTASIA:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        NOM_RAZAO_SOCIAL:{
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        NUM_TELEFONE:{
            type: DataTypes.STRING(11),
            allowNull: true,
        },
    },
    {
        sequelize: connection,
        modelName: 'tab_fornecedores',
        timestamps: false,
        freezeTableName: true,
    }
);
