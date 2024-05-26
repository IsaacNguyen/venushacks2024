import { useState } from 'react'
import './styles/Navbar.css'
import React from 'react'
import cow from '../assets/cow.png'
function Navbar(){
    return(
        <nav>
        <header>
            <div class = 'nav-links'>
            
                <ul>   
                    <div class = 'logo'>
                       <li><img src={cow}></img></li>
                       
                    </div>
                    <div class = 'name'>
                    <li><b>moove</b></li>
                    </div>
                </ul>
            
            </div>
        </header>
        </nav>
    )

} 
export default Navbar;