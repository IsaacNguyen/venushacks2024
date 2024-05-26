import react from 'react'
import React, { useState } from 'react';
import cow from '../assets/cow_car.png'
import styles from './styles/Verify.module.css'
import { useNavigate } from 'react-router-dom'

function Verify(){
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/report')
    }

    return (
        <>
        <div className= {styles.center}>
            <div className = {styles.quiz}>
                <div className = {styles.question}>
                    <h1>seller verified!</h1>
                </div>
                <div className = {styles.message}>
                    our services confirm you can safely MOOVE on!
                </div>
                <div className = {styles.continue}>
                    <button onClick={handleSubmit}>continue</button>
                </div>
                <div className = {styles.back}>
                    <button>&lt; back</button>
                </div>
            </div>
            <div className = {styles.pic}>
                <img src={cow}></img>
            </div>
        </div>
        </>
    )
}

export default Verify;