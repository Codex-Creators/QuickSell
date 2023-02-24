import { sequelizeConnection } from "../database/database_configuration.js";
import { Model } from "sequelize";

export class User extends Model {};

User.init({

},
    {
        sequelize: sequelizeConnection,
        modelName: "tab_usuarios",
        timestamps: true
    }
);