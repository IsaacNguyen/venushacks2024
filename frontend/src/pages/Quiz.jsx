import React, { useState } from 'react';
import cow from '../assets/cow-draw.gif'
import styles from './styles/Quiz.module.css'
import { useNavigate } from 'react-router-dom'

function Quiz() {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');
  
  const navigate = useNavigate();

  const questions = [
    { id: 1, answer: 'income', text: "yearly income?", type: "number" },
    { id: 2, answer: 'credit_score', text: "credit score?", type: "number" },
    { id: 3, answer: 'address', text: "address", type: "text" },
    { id: 4, answer: 'milKEY', text: "their milKEY?", type: "text" },
  ];

  const submitAnswer = (answer) => {
    localStorage.setItem(questions[currentQuestionIndex]['answer'], answer)
    console.log(localStorage.getItem(questions[currentQuestionIndex]['answer']))
    nextQuestion();
  };

  const callApi = async (address) => {
    try{
      const response = await fetch(`http://localhost:3000/property?address=${address}`);
      const result = await response.json();
      localStorage.setItem('propertyData', JSON.stringify(result));
      //console.log(JSON.stringify(result))
      
    } catch (err) {
      setError('Issue retrieving address data. Try again');
      console.log('ahhhh error')
    }
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const callKeyApi = async (address, key) => {
    try{
        key = inputValue;
        const response = await fetch(`http://localhost:3000/verify?address=${address}&key=${key}`);
        const data = await response.json(); // Parse response body as JSON
        console.log(data); // Log the parsed JSON data
        return data; // Return the parsed JSON data

    } catch (err) {
      setError('Issue retrieving address data. Try again');
      console.log('ahhhh error')
    }
  };

  const nextQuestion = async () => {
    setInputValue('');
    if (currentQuestionIndex + 1 < questions.length) {
      setQuestionIndex(currentQuestionIndex + 1);
    } else { //if done with questions, submit
        const address = localStorage.getItem('address')
        await callApi(address);
        const key = localStorage.getItem('key')
        const response = await callKeyApi(address, key);
        if (response.message == 'Key found for the specified address'){
            console.log('ITOSIHFDKLDSF A MATCH')
            navigate('/verified');
        }
        else
        {
            console.log('nah jit')
            navigate('/notverified');
        }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitAnswer(inputValue);
    }
  };
//move to prev question
  const prevQuestion = () => { 
    if (currentQuestionIndex > 0) {
      setQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate('/');
    }
  };

  const question = questions[currentQuestionIndex]; //Current question

  return (
    <>
      <div className={styles.center}>
        <div className={styles.quiz}>
          <div className={styles.question}>
            <h1>{question.text}</h1>
          </div>
          <div className={styles.input}>
            <input
              type={question.type}
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              maxLength={250}
            />
          </div>
          <div className={styles.continue}>
            <button onClick={() => submitAnswer(inputValue)}>Continue</button>
          </div>
          <div className={styles.back}>
            <button onClick={prevQuestion}>&lt; Back</button>
          </div>
        </div>
        <div className={styles.pic}>
          <img src={cow} alt="Cow in a car" />
        </div>
      </div>
    </>
  );
}

export default Quiz;