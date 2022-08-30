import React from 'react';
import logo from '../../assets/images/logo-bg.png';
import Account from './Account';

const Nav = () => {
    return (
        <nav className="bg-slate-50 py-5 px-5 drop-shadow-lg">
            <div className='container mx-auto flex flex-row justify-between items-center'>
                <ul>
                    <li>
                        <a href="/" className='flex flex-row items-center'>
                            <img className='w-10 h-10 mr-3' src={logo} alt="Quiz App" />
                            <h3 className='font-semibold'>Quiz App</h3>
                        </a>
                    </li>
                </ul>
                <Account></Account>
            </div>
        </nav>
    )
};

export default Nav;