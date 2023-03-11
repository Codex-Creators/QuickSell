import React from 'react';
import { FaUserAlt, FaCashRegister } from 'react-icons/fa';
import { BsFillBarChartFill, BsFillCartCheckFill, BsCartFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';
import { MdSell } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <label htmlFor='checkboxForAnimateNavbar' id='navbar-hamburguer-icon'><GiHamburgerMenu /></label>
            <input type="checkbox" id='checkboxForAnimateNavbar' />
            <nav className='navbar'>
                <ul className='navbar-buttons'>
                    <li className='navbar-button' onClick={() => navigate('/')}><i><BsCartFill /></i><div>Vendas</div></li>
                    <li className='navbar-button' onClick={() => navigate('/dashboard')}><i><BsFillBarChartFill /></i><div>Dashboard</div></li>
                    <li className='navbar-button' onClick={() => navigate('/providers')}><i><BsFillCartCheckFill /></i><div>Fornecedores</div></li>
                    <li className='navbar-button' onClick={() => navigate('/products')}><i><MdSell /></i><div>Produtos</div></li>
                    <li className='navbar-button' onClick={() => navigate('/clients')}><i><FaUserAlt /></i><div>Clientes</div></li>
                    <li className='navbar-button' onClick={() => navigate('/purchases')}><i><FaCashRegister /></i><div>Compras</div></li>
                    <li className='navbar-button' onClick={() => navigate('/users')}><i><RiSecurePaymentFill /></i><div>Usuários</div></li>
                    <li className='navbar-logout' onClick={() => navigate('')}><i><ImExit /></i><div>Logout</div></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;