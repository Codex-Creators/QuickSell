import React from 'react';
import '../styles/MainContainer.css';

function MainContainer({children}) {
    return ( 
        <main className='main-container'>{children}</main>

     );
}

export default MainContainer;