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
                       <li><a href = '/'><img src={cow}></img></a></li>
                       
                    </div>
                    <div class = 'name'>
                    <li><a href = '/'><b>moove</b></a></li>
                    </div>
                    
                    
                </ul> 
            </div>
        </header>
 
        </nav>
        
    )

} 
export default Navbar;