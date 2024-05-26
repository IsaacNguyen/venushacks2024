import react from 'react'
import './styles/Homepage.css'
import cow from '../assets/cow-ani.gif'
import { useNavigate } from 'react-router-dom';


function Homepage(){
    
    const navigate = useNavigate();
    const toAddressInput = () => {
        navigate('/address')
    }

    return(
        <>
        <div class = 'home'>
        <div class='text'> 
            <h1><b>moove</b></h1>
            <p>helping college students moove out since 2024</p>
            <div class = 'butt'>
            <button onClick={toAddressInput}>get started</button>
            </div>
        </div>
        <div class = 'house'>
            <img src={cow   }></img> 
        </div>
        </div>
        </>
    )
}
export default Homepage;