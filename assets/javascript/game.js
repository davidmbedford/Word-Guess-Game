// what needs to happen:
// i need to create an array of options for the computer to cycle through. see: var.nintendoArray
// i need to create a method by which that array is called
// i need to create a way that the letters are underscores, until they are guessed -> at which point they will be revealed
// i need to create a way by which your guesses are limited - 10 times?
// i need to create a way by which wins and losses are calculated
// i need to create a way by which the letters that you already used are logged onscreen

var nintendoArray = ["ZELDA", "KIRBY", "MARIO", "DONKEY KONG", "LUIGI", "SAMUS", "LINK", "PEACH", "BOWSER", "YOSHI", "GANONDORF", "FOX MCCLOUD", "FALCO LOMBARDI", "PIKACHU", "CAPTAIN FALCON"];
var answer = nintendoArray[Math.floor(Math.random()*nintendoArray.length)];
var display = [answer.length];
var ansDisplay = " ";
var letters = answer.split("");
var attemptsRem = 10;
var attemptsUpdate = "";
var output = "";
var userLetter = "";
var allLetters = [];
var winTest = 0;
var winValue = 0;
var wins = 0;
var losses = 0;

alert(answer);

var startup = function() {

  for (var i = 0; i < answer.length; i++) {
    display[i] = "_ ";
    output = output + display[i];
  }

  document.getElementById("answer").innerHTML = "Word: " + output;
  output = " ";
  document.getElementById("attempts").textContent = attemptsRem;
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;

}

window.onload = function() {
  startup();
}

// everything above sets phase 1:
// A. getting the game to choose an answer, and B. reveal it as underscores
//
// below is my attempt to enable the user to:
// A. submit an answer, and B. have it register onscreen

document.onkeyup = function(event) {

  var userLetter = event.key.toUpperCase();
  var checkLetter = allLetters.includes(userLetter);
  allLetters.push(userLetter);
  attemptsRem--;

  if (checkLetter == true) {
  }
  else {
    attemptsUpdate = attemptsUpdate.concat(" ", userLetter);

    document.getElementById("lettersGuessed").innerHTML = attemptsUpdate;

    var correctLetter = 0;

    for (x = 0; x < letters.length; x++) {
      var correctLetter = letters.indexOf(userLetter)
      if (correctLetter != -1) {
        if (correctLetter == 0) {
          userLetter = userLetter.toUpperCase()
        }

        attemptsDisplay[correctLetter] = userLetter;
        ansDisplay = attemptsDisplay.toString();

        for (y = 0; y < answer.length; y++){
          ansDisplay = ansDisplay.replace(",", " ");
        }

        letters[correctLetter] = "9"
        attemptsRem = attemptsRem + 1;
        winTest = 0

        for (z = 0; z < letters.length; z++) {
            winTest = winTest + parseInt(letters[z])
        }

      }

      document.getElementById("answer").textContent = ansDisplay;
      winTest = parseInt(winTest)

    }

  }

}

document.getElementById("answer").textContent = ("", + ansDisplay);

var attemptsDisplay = ansDisplay.split(" ");


var submit = function() {

  document.getElementById("game").innerHTML = output;
  output = "";
  attemptsRem--;

  if (win < 1){
    document.getElementById("endgame").innerHTML = "CORRECT!";
  }

  else if (attempts < 1) {
    document.getElementById("endgame").innerHTML = "WRONG!";
  }
  else {
    document.getElementById("endgame").innerHTML = "You have " + attemptsRem + " attempts left";
  }

}
