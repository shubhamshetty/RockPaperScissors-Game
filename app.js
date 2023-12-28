let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userscoreboard = document.querySelector("#user-score");
const compscoreboard = document.querySelector("#comp-score");

// Generating random computer choices
const genCompChoice = () => {
    const options = ['rock','paper','scissors']
    const randidx = Math.floor(Math.random()*3)
    return options[randidx]
}

// Show Winner and Message
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userscoreboard.innerText = userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "lightgreen";
    } else {
        compScore++
        compscoreboard.innerText = compScore;
        msg.innerText = `You Lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Game logic
const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    const compChoice = genCompChoice()
    console.log("Comp Choice = ", compChoice );
    if (userChoice === compChoice ){
        msg.innerText = "It's a Draw!" ;
        msg.style.backgroundColor = "black";
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

// Tracking User Options
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})