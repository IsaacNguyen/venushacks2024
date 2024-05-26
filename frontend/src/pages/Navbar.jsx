import React from 'react';
import './styles/Navbar.css';  // Make sure your CSS path is correct
import cow from '../assets/cow.png';  // Ensure the image path is correct

function Navbar() {
    return (
        <nav>
            <header>
                <div className='left'>
                    <div className='logo'>
                        <a href='/'><img src={cow} alt="Logo" /></a>
                    </div>
                    <div className='name'>
                        <a href='/'><b>moove</b></a>
                    </div>
                </div>
                <div className='right'>
                    <a href='/key'>MilKey</a>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;
