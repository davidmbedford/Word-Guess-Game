// what needs to happen:
// i need to create an array of options for the computer to cycle through. see: var.nintendoArray
// i need to create a method by which that array is called
// i need to create a way that the letters are underscores, until they are guessed -> at which point they will be revealed
// i need to create a way by which your guesses are limited - 10 times?
// i need to create a way by which wins and losses are calculated
// i need to create a way by which the letters that you already used are logged onscreen

//var $ = function (id) {
//  return document.getElementById(id);
//}

var nintendoArray = ["ZELDA", "KIRBY", "MARIO", "DONKEY KONG", "LUIGI", "SAMUS", "LINK", "PEACH", "BOWSER", "YOSHI", "GANONDORF", "FOX MCCLOUD", "FALCO LOMBARDI", "PIKACHU", "CAPTAIN FALCON"]
var compChoice = Math.floor(Math.random()*15);
var answer = nintendoArray[compChoice];
var ansLength = answer.length;
var display = [ansLength];
var win = ansLength;
var letters = answer.split('');
var attempts = 10;
var output = "";
var userLetter = "";

alert(answer);

var startup = function() {
  for (var i = 0; i < answer.length; i++) {
    display[i] = "_ ";
    output = output + display[i];
  }

  document.getElementById("compChoice").innerHTML = output;
  output = "";

}






window.onload = function() {
  startup();
}




// document.onkeyup = function(event) {
//   var userguess = event.key
//
//   if (userguess === "k") {
   //  alert(answer);
//   }
//
// }


  //var letter = event.key.toLowerCase ();
  //
  //if (letter === " x ") { // x = one of the letters in the word.
  //  //log x on screen and
  //}
  //  else {
//
  //  }
//
  //if (letter === "d") {
  //  car.driveToWork();
 //   reWriteStats();
  //}
//
  //if (letter === "w") {
  //  car.driveAroundWorld();
  //  reWriteStats();
  //}
//
  //if ( letter  === "t") {
  //  car.getTuneUp();
  //  reWriteStats();
  //}
//
//};
