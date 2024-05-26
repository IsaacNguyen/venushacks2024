import react from 'react'
import React, { useState } from 'react';
import cow from '../assets/cow_car.png'
import styles from './styles/NotVerified.module.css'
import { useNavigate } from 'react-router-dom'

function NotVerified(){
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/q')
    }

    return (
        <>
        <div className= {styles.center}>
            <div className = {styles.quiz}>
                <div className = {styles.question}>
                    <h1>sender NOT verified!</h1>
                </div>
                <div className = {styles.message}>
                    proceed with caution! our sources do NOT confirm reliable!
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

export default NotVerified;