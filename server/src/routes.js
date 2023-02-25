import express from 'express';
import connection from './database/database.js';
import User from './models/User.js';
export const routes = express.Router();


routes.get('/', (req, res) => {
    connection.sync().then(() => {
        console.log('Conectado ao banco');
    }).catch(error => {
        console.log(error);
    });
    connection.query('select E.cod_entrada, E.dta_emissao, IE.cod_produto, P.des_produto, F.num_cnpj_fornecedor, F.nom_fantasia from tab_entrada as E, tab_item_entrada as IE, tab_produto as P, tab_fornecedor as F where E.cod_entrada = IE.cod_entrada and F.num_cnpj_fornecedor = IE.num_cnpj_fornecedor and P.cod_produto = IE.cod_produto;')
    .then(result => {
        res.send(result);
    })
    .catch(error => {
        console.log(error);
    });
});

routes.get('/users', async(req, res) => {

    try {
        let user = await User.findByPk('1');    
        console.log(user);
        res.send(`<h1>${user.des_email}</h1>`);
        
    } catch(error) {
        res.send(error);
    }

});