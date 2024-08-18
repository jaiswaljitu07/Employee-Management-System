import React from 'react';
import './Header.css';

function Header({ setIsAdding }) {
    return (
        <>
            <header>
                <h1>Employee Management</h1>
            </header>
            <button className='demo' onClick={() => setIsAdding(true)}>Add Employee</button>
        </>
    );
}

export default Header;
