import react from 'react'
import cow from '../assets/cow_car.png'
import styles from './styles/Quiz.module.css'
import { useNavigate } from 'react-router-dom'

function Quiz(){
    const[currentQuestionIndex, setQuestionIndex] = react.useState(0);
    const[answers, setAnswers] = react.useState({});
    const questions = [{id: 1, text: "yearly income?", type: "number"}, {id: 2, text: "credit score?", type: "number"}, {id: 3, text: "address", type: "text"}, {id: 4, text: "who's selling?", type: "text"}, ];
    const submitAnswer = (answer) => {
        if(answer.trim() !== ""){
            setAnswers(answers =>( {...answers, [questions[currentQuestionIndex].id]: input}));

            nextQuestion();
        }
    };
    const nextQuestion = () => {
        if(currentQuestionIndex+1 < questions.length){
            setQuestionIndex(currentQuestionIndex+1);
        }
    };
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            submitAnswer(e.target.value);
        }
    }

    const prevQuestion = () => {
        if(currentQuestionIndex > 0){
            setQuestionIndex(currentQuestionIndex-1);
        }
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
                    <input type = {question.type} onKeyDown={handleKeyPress}   ref={(input) => input && input.focus()} maxlength = {250}/>
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