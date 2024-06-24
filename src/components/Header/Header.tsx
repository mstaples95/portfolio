import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header: React.FC = () => {
    
    return (
        <header className='nav-bar'>
            <div className='nav-bar__image-container'>
                <img className='nav-bar__logo' src={logo} alt='logo'/>
            </div>
            <div className='nav-bar__list-container'>
                <ul className='nav-bar__list'>
                    <li className='nav-bar__list-item'>
                        <Link to={"/"}>About</Link>
                    </li>
                        
                    <li className='nav-bar__list-item'>
                        <Link to={"/"}>Skills</Link>
                    </li>
                        
                    <li className='nav-bar__list-item'>
                        <Link to={"/"}>Projects</Link>
                    </li>
                            
                    <li className='nav-bar__list-item'>
                        <Link to={"/"}>Contact</Link>
                    </li>             
                </ul>
            </div>

        </header>
    )
};

export default Header;