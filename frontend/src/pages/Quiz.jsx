import react from 'react'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import cow from '../assets/cow_car.png'
import styles from './styles/Quiz.module.css'

function Quiz(){
    const[currentQuestionIndex, setQuestionIndex] = react.useState(0);
    const[answers, setAnswers] = react.useState({});
    const questions = [{id: 1, text: "yearly income?", type: "number"}, {id: 2, text: "credit score?", type: "number"}, {id: 3, text: "address", type: "text"}, {id: 4, text: "who's selling?", type: "text"}, ];
    
    const [address, setAddress] = useState('');
    const [propertyData, setPropertyData] = useState(null);

    // const submitAnswer = (answer) => {
    //     if(answer.trim() !== ""){
    //         setAnswers(answers =>( {...answers, [questions[currentQuestionIndex].id]: input}));

    //         nextQuestion();
    //     }
    // };
    // const nextQuestion = () => {
    //     if(currentQuestionIndex+1 < questions.length){
    //         setQuestionIndex(currentQuestionIndex+1);
    //     }
    // };
    // const handleKeyPress = (e) => {
    //     if(e.key === 'Enter'){
    //         e.preventDefault();
    //         submitAnswer(e.target.value);
    //     }
    // }

    // const prevQuestion = () => {
    //     if(currentQuestionIndex > 0){
    //         setQuestionIndex(currentQuestionIndex-1);
    //     }
    // };
    useEffect(() => {
        // Load property data from local storage when the component mounts
        const savedPropertyData = localStorage.getItem('propertyData');
        if (savedPropertyData) {
          setPropertyData(JSON.parse(savedPropertyData));
        }
      }, []);

    const handleChange = (e) => {
        setAddress(e.target.value);
    };

    const navigate = useNavigate();
    const toKeyInput = () => {
        navigate('/key');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        callApi(address);
        toKeyInput()
    };

    const callApi = (ff) => {
        console.log('hello');
        var url = "https://property.melissadata.net/v4/WEB/LookupProperty/";
        url += '?' + new URLSearchParams({
          'id': "g5JO_3nBG3r5Yp2ERCXd6y**nSAcwXpxhQ0PC2lXxuDAZ-**",
          'cols': "GrpAll",
          'format': "json",
          'ff': ff
        }).toString();
    
        fetch(url, { method: 'GET' })
          .then(response => response.json())
          .then(result => {
            console.log(result)
            localStorage.setItem('propertyData', JSON.stringify(result));
        })
          .catch(err => { throw err; });
      };

    const question = questions[currentQuestionIndex];
    return(
        <>
        <div className= {styles.center}>
            <div className = {styles.quiz}>
                <div className = {styles.question}>
                    <h1>{question.text}</h1>
                </div>
                <form onSubmit={handleSubmit}>     
                    <input type="text" value={address} onChange={handleChange} required />
                    <button type="submit">Search</button>
                </form>
                {/* <input type = {question.type} onKeyDown={handleKeyPress}   ref={(input) => input && input.focus()} maxlength = {250}/> */}
            </div>

            <div className = {styles.pic}>
                <img src={cow}></img>
            </div>
        </div>
        </>
    )
}

export default Quiz;