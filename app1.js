// Create variable for score, round score, actice player
var score, roundScore, acticePlayer, gamePlaying, lastDice;

// reset score
gameInit();
// Add event for roll dice
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //Add random var
    var dice = Math.floor(Math.random() * 6) + 1;
    var selectDice = document.querySelector(".dice");
    // Add UI for dice
    selectDice.src = "dice-" + dice + ".png";
    // Display dice
    selectDice.style.display = "block";
    // Update score (add UI score) and

    if (lastDice === 6 && dice === 6) {
      score[acticePlayer] = 0;
      document.querySelector("#score-" + acticePlayer).textContent =
        score[acticePlayer];
    } else if (dice !== 1) {
      roundScore += dice;
      document.querySelector(
        "#current-" + acticePlayer
      ).textContent = roundScore;
    } else {
      // change player & reset score if dice = 1
      changePlayer();
    }

    lastDice = dice;
  }
});

// Add event for hold
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    //Add round score to score , show UI
    score[acticePlayer] += roundScore;
    document.querySelector("#score-" + acticePlayer).textContent =
      score[acticePlayer];
    //Reset round score
    roundScore = 0;

    // Check if some one win the game
    if (score[acticePlayer] >= 20) {
      document.querySelector(".dice").style.display = "none";
      document.querySelector("#name-" + acticePlayer).textContent = "Winner";
      document
        .querySelector(".player-" + acticePlayer + "-panel")
        .classList.add("winner");
      gamePlaying = false;
    } else {
      //change player
      changePlayer();
    }
  }
});

// Add event for new game
document.querySelector(".btn-new").addEventListener("click", function() {
  // Reset game
  gameInit();
});

function changePlayer() {
  acticePlayer !== 0 ? (acticePlayer = 0) : (acticePlayer = 1);
  roundScore = 0;
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

function gameInit() {
  score = [0, 0];
  roundScore = 0;
  acticePlayer = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  gamePlaying = true;
}
