const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("r");
const paper_div = document.querySelector("p");
const scissors_div = document.querySelector("s");


function getComputerChoice() {
	const choices = {'r', 'p', 's'};
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

getComputerChoice();

function convertToWord(letter) {
	
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = ${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rp":
		case "pr":
		case "sp":
		wins();
		break;
		case "rp":
		case "ps"
		case "sr"
		lose();
		break;
		case "rr":
		case "pp"
		case "ss"
		draw();
		break;
	}
}

game("c");

function main(){
	rock_div.addEventListener('click', function() {
	game("r")
	})

	paper_div.addEventListener('click', function() {
	game("p")
	})

	scissors_div.addEventListener('click', function() {
	game("s")
	})
}

main();
