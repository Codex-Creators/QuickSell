import express from 'express';
import { connectionToMySQL } from './database/databaseConfiguration.js';

export const routes = express.Router();

routes.get('/', (req, res) => {
    res.sendStatus(200);
});

routes.get('/show_tables', (req, res) => {
    connectionToMySQL.query('SHOW TABLES', (err, query) => {
        if (err) return console.log(err);
        res.send(query);
    });
});