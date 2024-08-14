let userScore = 0 ;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userS = document.querySelector("#user-score");
const compS = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options =["rock" ,"paper" , "scissors"];
    const rIdx = Math.floor(Math.random()*3);
    return options[rIdx];
    //rock,paper,scissors
};

const drawGame =() => {
    msg.innerText = "Draw Match! Play AGAIN";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userS.innerText = ++userScore;
        msg.innerText=`You Win ! ${userChoice} defeat the ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        compS.innerText = ++compScore;
        msg.innerText=`You Lose ! ${compChoice} defeat by ${userChoice} `
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
const compChoice = genCompChoice();
if(userChoice === compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice == "rock")
        {
            userWin = compChoice === "paper" ? false :true;
        }
    else if(userChoice == "paper")
            {
                userWin = compChoice === "scissors" ? false :true;
            }
    else
        {
            userWin = compChoice === "rock" ? false :true;
        }
    showWinner(userWin , userChoice , compChoice);
}
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }
)
})