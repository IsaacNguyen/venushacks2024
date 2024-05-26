import react from 'react'
import React, { useState } from 'react';
import cow from '../assets/cow-ani.gif'
import styles from './styles/Quiz.module.css'
import { useNavigate } from 'react-router-dom'

function Quiz(){
    const[currentQuestionIndex, setQuestionIndex] = react.useState(0);
    const[answers, setAnswers] = react.useState({});
    const questions = [{id: 1, text: "yearly income?", type: "number"}, {id: 2, text: "credit score?", type: "number"}, {id: 3, text: "address", type: "text"}, {id: 4, text: "their milKEY?", type: "text"}, ];
    const submitAnswer = (answer) => {
        console.log(currentQuestionIndex);
        if(answer.trim() !== ""){
            setAnswers({ ...answers, [questions[currentQuestionIndex].id]: answer });
            nextQuestion();
        }
        if(currentQuestionIndex == 3) {
            navigate('/key')
        }
    };

    const [inputValue, setInputValue] = react.useState('');
    const [errorMessage, setErrorMessage]  = react.useState('');

    const nextQuestion = () => {
        console.log(inputValue)
        if (!inputValue){
            setErrorMessage('please input a valid input!')
        }
        else {
            setErrorMessage('')
            setInputValue('');
        
            if(currentQuestionIndex+1 < questions.length){
                setQuestionIndex(currentQuestionIndex+1);
            }
            else {
                navigate('/key')
            }
        }
        
    };
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            submitAnswer(inputValue);
        }
    }

    const prevQuestion = () => {
        if(currentQuestionIndex > 0){
            setQuestionIndex(currentQuestionIndex-1);
        }
        else{navigate('/');}
    };

    const navigate = useNavigate();

    const question = questions[currentQuestionIndex];
    return(
        <>
        <div className= {styles.center}>
            <div className = {styles.quiz}>
                <div className = {styles.question}>
                    <h1>{question.text}</h1>
                </div>
                <div className = {styles.input}>
                    <input type={question.type} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} ref={(input) => input && input.focus()} maxLength={250}/>
                </div>
                <div className = {styles.error}>
                    <p>{errorMessage}</p>
                </div>
                <div className = {styles.continue}>
                    <button onClick={nextQuestion}>continue</button>
                </div>
                <div className = {styles.back}>
                    <button onClick={prevQuestion}>&lt; back</button>
                </div>
            </div>
            <div className = {styles.pic}>
                <img src={cow}></img>
            </div>
        </div>
        </>
    )
}

export default Quiz;