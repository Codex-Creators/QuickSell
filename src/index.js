import express from 'express';
import { routes } from './routes.js';
import { sequelizeConnection } from './database/database_configuration.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

//sequelizeConnection.sync(() => console.log('ok'));

app.listen(3000);