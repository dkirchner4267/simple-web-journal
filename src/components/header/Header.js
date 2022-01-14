import React from 'react';
import './Header.css';
import Logo from '../../assets/SWJ-Logo.png';

const Header = () => {
    return (
        <div className='header-main'>
            <div className='header-logo-div'>
                <img src={Logo} alt='SimpleWebJournal logo' className='logo-image'/>
            </div>
            <div className='links-div'>
                <h3 className='header-link'>ABOUT</h3>
                <h3 className='header-link'>SIGN OUT</h3>
            </div>
        </div>
    )
}

export default Header;