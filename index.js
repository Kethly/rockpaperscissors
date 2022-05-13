const getChoice = a => a === 0 ? "🤜" : (a === 1 ? "🤚": "✌");
const getComputerChoice = () => (a = parseInt(Math.random() * 3), getChoice(a));
const getWinner = (a, b) => ((win = {"🤜": "✌", "🤚":"🤜", "✌": "🤚"}), win[a] === b ? "Win" : a === b ? "Tie" : "Lose" );
const getFinalWinner = (a, b) => a > b ? "You Won!" : "You didn't win :(";
let roundCount = 1;
let computerTally = 0;
let playerTally = 0;
const addWin = a => a === "Win" ? playerTally++ : a === "Lose" ? computerTally++ : "nothing";
let previousComputerChoice = 0;
function round(playerChoice){
    document.getElementById(previousComputerChoice % 3).classList.remove("active");
    myElement = document.getElementsByClassName("userSelect")[0];
    for (let i = 0; i < myElement.children.length; i++) {
        myElement.children[i].disabled = true;
    }
    if(roundCount <= 5){
        document.getElementsByClassName("player")[0].innerText = getChoice(playerChoice);
        let computerRand = parseInt(Math.random() * 10) + 7;
        let computerChoice = getChoice((computerRand - 1) % 3);
        previousComputerChoice = computerRand - 1;
        let timeout = 300; 
        for(let x = 0; x < computerRand; x++){
            setTimeout(() => document.getElementById(x%3).classList.add("active"), x * timeout);
            if(!(x === computerRand - 1)){
                setTimeout(() => document.getElementById(x%3).classList.remove("active"), x * timeout + 300);
            }
        }
        setTimeout(() => {
            document.getElementsByClassName("computer")[0].innerText = computerChoice;
            document.getElementById("result").innerText = (getWinner(getChoice(playerChoice),computerChoice));
            addWin(getWinner(getChoice(playerChoice),computerChoice));
            roundCount += 1;
            document.getElementById("round#").innerText = "Round " + roundCount + ":";
            for (let i = 0; i < myElement.children.length; i++) {
                myElement.children[i].disabled = false;
            }
            if(roundCount === 6){
                document.getElementById("round#").innerText = "Game Over!";
                document.getElementById("result").innerText = getFinalWinner(playerTally, computerTally);
            }
        }, computerRand * timeout)

    }
}