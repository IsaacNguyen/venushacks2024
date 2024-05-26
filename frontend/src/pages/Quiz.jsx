import react from 'react'
import cow from './assets/cow_car.png'

function Quiz(){
    const[currentQuestionIndex, setQuestionIndex] = react.useState(0);
    const[answers, setAnswers] = react.useState({});
    const questions = [{id: 1, text: "What's your yearly income?", type: "number"}, {id: 2, text: "What's your credit score?", type: "number"}, {id: 3, text: "Address of Home", type: "text"}, {id: 4, text: "Who's selling you the house?", type: "text"}, ];
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

    const question = questions[currentQuestionIndex];
    return(
        <>
        <div class = 'quiz'>
            <div class = 'question'>
                <question.text/>
            </div>
            <input type = {question.type} onKeyDown={handleKeyPress}   ref={(input) => input && input.focus()} maxlength = {250}/>
        </div>

        <div class = 'pic'>
            <img src={cow}></img>
        </div>
        </>
    )
}
