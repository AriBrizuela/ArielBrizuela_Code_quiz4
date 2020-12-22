const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const bodyIntro = document.getElementById('body-intro')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    bodyIntro.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    question.classList.remove('hide')
    answerButtonsElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        Question:'What is 2+2',
        answers: [
            {text:'4', correct: true },
            {text:'fish', correct:false}
        ]
    }
]