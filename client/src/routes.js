import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sells from './pages/Sells';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Sells />} />
            {/* <Route path='/providers' element={<Providers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/clients' />
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/addPurchase' element={<AddPurchase />} />
            <Route path='/users' />
            <Route path='/dashboard' />
            <Route path='/productCategories' element={<ProductCategories />} /> */}
        </Routes>
    );
}

export default MainRoutes;