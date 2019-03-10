// what needs to happen:
// i need to create an array of options for the computer to cycle through. see: var.nintendoArray
// i need to create a method by which that array is called
// i need to create a way that the letters are underscores, until they are guessed -> at which point they will be revealed
// i need to create a way by which your guesses are limited - 10 times?
// i need to create a way by which wins and losses are calculated
// i need to create a way by which the letters that you already used are logged onscreen

//var $ = function (id) {
 // return document.getElementById(id);
//}

var nintendoArray = ["ZELDA", "KIRBY", "MARIO", "DONKEY KONG", "LUIGI", "SAMUS", "LINK", "PEACH", "BOWSER", "YOSHI", "GANONDORF", "FOX MCCLOUD", "FALCO LOMBARDI", "PIKACHU", "CAPTAIN FALCON"]
var compChoice = Math.floor(Math.random()*nintendoArray.length);
var answer = nintendoArray[compChoice];
var ansLength = answer.length;
var display = [ansLength];
var ansDisplay = "";
var win = ansLength;
var letters = answer.split('');
var attemptsRem = 10;
var attemptsUpdate = "";
var output = "";
var userLetter = "";
var allLetters = [];

alert(answer);

var startup = function() {

  for (var i = 0; i < answer.length; i++) {
    display[i] = "_ ";
    output = output + display[i];
  }

  document.getElementById("answer").innerHTML = "Word: " + output;
  output = " ";

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

  if (checkLetter == true) {
  }
  else {
    attemptsUpdate = attemptsUpdate.concat(" ", userLetter);

    document.getElementById("lettersGuessed").innerHTML = attemptsUpdate;

    var correctLetter = 0;

    for (x=0; x < nintendoArray.length; x++) {
      var correctLetter = nintendoArray.indexOf(userLetter)
      if (correctLetter != -1) {
        if (correctLetter == 0) {
          correctLetter = correctLetter.toUpperCase()
        }
        attemptsDisplay[correctLetter] = userLetter;
        ansDisplay = attemptsDisplay.toString();
      }

    }

  }

document.getElementById("answer").html = ansDisplay;

var attemptsDisplay = ansDisplay.split(" ");
}

var submit = function() {

  output = "";
  userLetter=$("letter").nodeValue;
  $("letter").value = "";

  for (var x = 0; x < answer.length; x++) {
    alert(letters[x]);
    if (userLetter.toUpperCase() == letters[x]){
      display[x] = userLetter.toUpperCase();
      win--;
    }
      output = output + display[x] + "";
  };

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
