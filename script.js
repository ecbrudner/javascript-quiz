var timerElement= document.getElementById("timer-block");
var startButton= document.getElementById("start-button");

var isCorrect= false;
var numberCorrect= 0;
var numberWrong= 0;
var timer;
var timerCount;

function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    startTimer();
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

startButton.addEventListener("click", startQuiz);