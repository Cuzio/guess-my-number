const message = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const scorePoint = document.querySelector(".score");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const resetButton = document.querySelector(".again");
const highScorePoints = document.querySelector(".highscore")

let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log("secret number: " + secretNumber);

checkButton.addEventListener("click", () => {
    // console.log("check clicked")
    const guess = Number(guessInput.value);

    //falsey values => undefined, null, false, 0, NaN, ""
    if (!guess){
        message.innerHTML = "no number typed";
    }else if (guess == secretNumber){
        message.innerHTML = "Correct✔"

        if (score > highScore){
            highScore = score;
            highScorePoints.innerHTML = highScore;
        }
        body.style.backgroundColor = "green";
        number.innerHTML = secretNumber;
    }else if (guess > secretNumber){
        if (score > 0){
        message.innerHTML = "too high";
        score--;
        scorePoint.innerHTML = score;
        }else{
            message.innerHTML = "You lost";
        }
    }else if (guess < secretNumber){
        if (score > 0){
        message.innerHTML = "too low"
        score--;
        scorePoint.innerHTML = score;
        }else{
            message.innerHTML = "You lost";
        }
    }
})

//work on the reset. everything goes back to d
resetButton.addEventListener("click", () => {
    guessInput.value = "";
    body.style.backgroundColor = "#222"
    number.innerHTML = "?"
    message.innerHTML = "Start guessing..."
    scorePoint.innerHTML = 20;
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log("new secret number: " + secretNumber)
})




