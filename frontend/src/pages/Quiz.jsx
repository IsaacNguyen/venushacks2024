import react from 'react'
import './styles/Quiz.css'
import cow from '../assets/cow_car.png'


function Quiz(){
    const[currentQuestionIndex, setQuesrtionIndex] = react.useState(0);
    return(
        <>
        <div class = 'quiz'>
        <div class = 'question'>
            <h1><b>question 1</b></h1>
            <div class = 'empty1'>
            </div>
            <div class = 'entertext'>
                <button1>enter text here...</button1>
            </div>
            <div class = 'empty2'>
            </div>
            <div class = 'cont'>
            <button2>continue</button2>
            </div>
            </div>
            <div class = 'back'>
                <backbutton>back</backbutton>
            </div>
        </div>
        <div class = 'pic'>
            <img src={cow}></img>
        </div>
        </>
    )
}

export default Quiz;