
import  styles from './styles/Homepage.module.css';
import cow from '../assets/cow-ani.gif';
import { useNavigate } from 'react-router-dom';


function Homepage(){
    
    const navigate = useNavigate();
    const toAddressInput = () => {
        navigate('/address')
    }

    return(
        <>
        <div className = {styles.home} >
        <div className={styles.text}> 
            <h1><b>moove</b></h1>
            <p>helping college students moove out since 2024</p>
            <div className = {styles.butt}>
            <button onClick={toAddressInput}>get started</button>
            </div>
        </div>
        <div className = {styles.pic}>
            <img src={cow}></img> 
        </div>
        </div>
        </>
    )
}
export default Homepage;