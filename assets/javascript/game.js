var wins = 0;
var losses = 0;
var playerScore = 0;

$(document).ready(function() {
	gameStart();
//crystal 1
		$("#pic1").on("click", function() {
			playerScore = playerScore + crystal1;
			console.log("Player's Score = " + playerScore);
			$("#displayPlayerTotal").text(playerScore);
			if (playerScore === randomNumber) {
				wins++;
				$("#win").html("Wins: " + wins);
				$("#resultDivWin").html("YOU WON!"); 
				gameStart();
			}
			if (playerScore > randomNumber) {
				losses++;
				$("#loss").html("Losses: " + losses);
				$("#resultDivLoss").html("Try Again, Jabroni");
				gameStart();
			}
		});
		//crystal 2
		$("#pic2").on("click", function() {
			playerScore = playerScore + crystal2;
			console.log("Player's Score = " + playerScore);
			$("#displayPlayerTotal").text(playerScore);
			if (playerScore === randomNumber) {
				wins++;
				$("#win").html("Wins: " + wins);
				gameStart();
			}
			if (playerScore > randomNumber) {
				losses++;
				$("#loss").html("Losses: " + losses);
				gameStart();
			}
		});
		//crystal 3
		$("#pic3").on("click", function() {
			playerScore = playerScore + crystal3;
			console.log("Player's Score = " +playerScore);
			$("#displayPlayerTotal").text(playerScore);
			if (playerScore === randomNumber) {
				wins++;
				$("#win").html("Wins: " + wins);
				gameStart();
			}
			if (playerScore > randomNumber) {
				losses++;
				$("#loss").html("Losses: " + losses);
				gameStart();
			}
		});
		//crystal4
		$("#pic4").on("click", function() {
			playerScore = playerScore + crystal4;
			console.log("Player's Score =" + playerScore);
			$("#displayPlayerTotal").text(playerScore);
			if (playerScore === randomNumber) {
				wins++;
				$("#win").html("Wins: " + wins);
				gameStart();
			}
			if (playerScore > randomNumber) {
				losses++;
				$("#loss").html("Losses: " + losses);
				gameStart();
			}
		});
});

//function reset variables at game start
function gameStart() {
	randomInt();
	playerScore = 0;
	$("#displayPlayerTotal").text(playerScore);
	$("#resultDivWin").html("");
	$("#resultDivLoss").html("");

	randomCrystal1();
	randomCrystal2();
	randomCrystal3();
	randomCrystal4();
}

//function to choose random number to beat and log it to the screen
function randomInt() {
	randomNumber = Math.floor(Math.random() + ((120 - 19) + 1) + 19);
	console.log(randomNumber);
	$("#randomPick").text(randomNumber);
}
//functions to define each crystal's random number
function randomCrystal1() {
	crystal1 = Math.floor(Math.random() * 12 + 1);
	console.log(crystal1);
}

function randomCrystal2() {
	crystal2 = Math.floor(Math.random() * 12 +1);
	console.log(crystal2);
}

function randomCrystal3() {
	crystal3 = Math.floor(Math.random() * 12 + 1);
	console.log(crystal3);
}

function randomCrystal4() {
	crystal4 = Math.floor(Math.random() * 12 +1);
	console.log(crystal4);
}