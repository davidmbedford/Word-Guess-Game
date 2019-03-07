// what needs to happen:
// i need to create an array of options for the computer to cycle through. see: var.nintendoArray
// i need to create a method by which that array is called
// i need to create a way that the letters are underscores, until they are guessed -> at which point they will be revealed
// i need to create a way by which your guesses are limited - 10 times?
// i need to create a way by which wins and losses are calculated
// i need to create a way by which the letters that you already used are logged onscreen

var nintendoArray = ["Zelda," "Kirby," "Mario," "Donkey Kong," "Luigi," "Samus," "Link," "Peach," "Bowser," "Yoshi," "Ganondorf," "Fox McCloud," "Falco Lombardi," "Pikachu," "Captain Falcon"]
var compChoice = math.floor(math.random()*15);
var answer = nintendoArray[compChoice]
