var timerElement= document.getElementById("timer-block");
var startButton= document.getElementById("start-button");
var quizSection= document.getElementById("quiz-section");

var isCorrect= false;
var numberCorrect= 0;
var numberWrong= 0;
var timer;
var timerCount;

function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    startTimer();
    beginQuizQuestions();
  }
  
function startTimer() {
    timerCount=75;
    timer= setInterval(()=>{
        timerElement.innerHTML= 'Time remaining: '+ timerCount + ' seconds';
        timerCount --;

    if (timerCount < 0){
        clearInterval(timer);
    }
    }, 1000);
    
  }

  function beginQuizQuestions(){
    
  }

startButton.addEventListener("click", startQuiz);