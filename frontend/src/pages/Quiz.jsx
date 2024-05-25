import react from 'react'
import cow from './assets/cow_car.png'


function Quiz(){
    const[currentQuestionIndex, setQuesrtionIndex] = react.useState(0);
    return(
        <>
        <div class = 'quiz'>
            <div class = 'question'>
                <p>Question 1</p>
            </div>
        </div>
        <div class = 'pic'>
            <img src={cow}></img>
        </div>
        </>
    )
}