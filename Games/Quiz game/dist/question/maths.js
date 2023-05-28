const quizData = [
    {
        question: "(1)What is addition?",
        a: "(a)action word",
        b: "(b)joining word",
        c: "(c)naming word",
        d: "(d)none of the above",
        correct: "a",
    },
    {
        question: "(2)As______as gall.",
        a: "sweet",
        b: "black",
        c: "fat",
        d: "bitter",
        correct: "d",
    },
   {
        question: "(3)What is a fraction?",
        a: "action word",
        b: "joining word",
        c: "naming word",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "(4)What year did Guyana became independent?",
        a: "1996",
        b: "1970",
        c: "1994",
        d: "1966",
        correct: "d",
    },
    
 {
        question: "(5)What year was Linden Town Week launched in Guyana?",
        a: "1996",
        b: "2002",
        c: "1994",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "(6)Willan can_____faster than_______.",
        a: "run;i",
        b: "ran;i",
        c: "ran;me",
        d: "run;me",
        correct: "d",
    },
    
      {
        question: "(7)_____and_____went for a walk.",
        a: "He;I",
        b: "Him;me",
        c: "He;me",
        d: "Him;I",
        correct: "a",
    },
      {
        question: "(8)The Doctors_____nurses worked hard to save the little girl life.",
        a: "either",
        b: "neither",
        c: "and",
        d: "together",
        correct: "c",
    },
     {
        question: "(9)_____are______?",
        a: "Who;them",
        b: "Whom;they",
        c: "Who;they",
        d: "Whom;they",
        correct: "c",
    },
    
       {
        question: "(10)Wait their_____I have finished!",
        a: "how",
        b: "when",
        c: "that",
        d: "till",
        correct: "d",
    },
       {
        question: "(11)As havy as_______.",
        a: "feader",
        b: "a pin",
        c: "leader",
        d: "a hear clip",
        correct: "a",
    },
    {
        question: "(12)She brought some_______.",
        a: "steak",
        b: "stake",
        c: "staek",
        d: "stak",
        correct: "a",
    },
    ];
    

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
