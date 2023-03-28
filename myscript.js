let randomString = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return randomString[Math.floor(Math.random() * randomString.length)];
}

function firstLetterCapital(string){    
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
    // MY code here!
    const computerSelectionPaper = "Paper";
    const computerSelectionRock = "Rock";
    const computerSelectionScissors = "Scissors";

    //If statements if the input is "Rock"
    if(computerSelectionPaper === computerSelection &&firstLetterCapital(playerSelection)  === "Rock"){
        computerCount++;
        return `You lose! ${computerSelection} beats ${firstLetterCapital(playerSelection)}`;
    }
    else if(computerSelectionRock === computerSelection &&firstLetterCapital(playerSelection)  === "Rock"){
        return `You tie! ${computerSelection} draw with ${firstLetterCapital(playerSelection)}`;
    }
    else if(computerSelectionScissors === computerSelection &&firstLetterCapital(playerSelection)  === "Rock"){
        playerCount++;
        return `You win! ${firstLetterCapital(playerSelection)} beats ${computerSelection}`;
    }

    //If statements if the input is "Paper"
    else if(computerSelectionPaper === computerSelection &&firstLetterCapital(playerSelection)  === "Paper"){
        return `You tie! ${computerSelection} draw with ${firstLetterCapital(playerSelection)}`;
    }
    else if(computerSelectionRock === computerSelection &&firstLetterCapital(playerSelection)  === "Paper"){
        playerCount++;
        return `You win! ${firstLetterCapital(playerSelection)} beats ${computerSelection}`;
    }
    else if(computerSelectionScissors === computerSelection &&firstLetterCapital(playerSelection)  === "Paper"){
        computerCount++
        return `You lose! ${computerSelection} beats ${firstLetterCapital(playerSelection)}`;
    }

    //If statements if the input is "Scissors"
    else if(computerSelectionPaper === computerSelection &&firstLetterCapital(playerSelection)  === "Scissors"){
        playerCount++;
        return `You win! ${firstLetterCapital(playerSelection)} beats ${computerSelection}`;
    }
    else if(computerSelectionRock === computerSelection &&firstLetterCapital(playerSelection)  === "Scissors"){
        computerCount++;
        return `You lose! ${computerSelection} beats ${firstLetterCapital(playerSelection)}`;
    }
    else if(computerSelectionScissors === computerSelection &&firstLetterCapital(playerSelection)  === "Scissors"){
        return`You tie! ${computerSelection} draw with ${firstLetterCapital(playerSelection)}`;
    }

}

//this was the default value before we use the prompt() to get input from the user
// const playerSelection = "RoCK";
// console.log(playRound(playerSelection, computerSelection));
const computerSelection = getComputerChoice();


function game(){
    let input1 = prompt("Choose between Rock, Paper, or Scissors?");
    console.log(playRound(input1, getComputerChoice()));

    let input2 = prompt("Choose between Rock, Paper, or Scissors?");
    console.log(playRound(input2, getComputerChoice()));

    let input3 = prompt("Choose between Rock, Paper, or Scissors?");
    console.log(playRound(input3, getComputerChoice()));

    let input4 = prompt("Choose between Rock, Paper, or Scissors?");
    console.log(playRound(input4, getComputerChoice()));

    let input5 = prompt("Choose between Rock, Paper, or Scissors?");
    console.log(playRound(input5, getComputerChoice()));
    
    //build test case for empty string, ask to type something, 5 tries in total
    //build test case for wrong spelling, ask to try and spell again, 5 tries in total
    //First to 5 wins the match
    //it didn't say anything to implement it in this one. but when I revisit I will come back
    //to these issues and try and implement them if/they are asked
    //for now I am done
    //just need to upload this file to GitHub
    // if(input1,input2,input3,input4,input5 ===''){
    //     return "Please input something! Try again";
    //  }
    // 

    if(playerCount > computerCount && playerCount === 3){
        return "You won the Round-of-5 against the computer!";
    } else if(computerCount > playerCount && computerCount === 3){
        return "You lost the Round-of-5 against the computer!";
    } else return "You tied the Round-of-5 against the computer!";
}
console.log(game());