
//Updated Game
// this is an object that holds the values of each button.
var btnValue = {
  btn0:'0',
  btn1:'1',
  btn2:'2',
  btn3:'3',
  btn4:'4',
  btn5:'5',
  btn6:'6',
  btn7:'7',
  btn8:'8',
};

//this is an array that keeps track of all the squares played so that
// the computer does not repeat a square.
var btnsPlayed = [];


// The following 0-8 functions inserts an "X" into the Tic Tac Toe Board using
//Dom Manipulation for squares 0-8, by grabbing the numerical ID of the square from the HTML
//Code (ID is listed as 0-8). These functions adds squares 0 to 8 to the array
// of buttonsplayed. These functions set the value of the specific Square to 1.
// All X's will have a value of 1, that stored in the values object.

 function createX0() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("0").appendChild(textNode);
  document.getElementById("0").setAttribute("style", "background-color: red;");
  btnsPlayed.push(0);
  btnValue.btn0 = 1;
}


 function createX1() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("1").appendChild(textNode);
  document.getElementById("1").setAttribute("style", "background-color: red;");
  btnsPlayed.push(1);
  btnValue.btn1 = 1;
}

function createX2() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("2").appendChild(textNode);
  document.getElementById("2").setAttribute("style", "background-color: red;");
  btnsPlayed.push(2);
  btnValue.btn2 = 1;
}

function createX3() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("3").appendChild(textNode);
  document.getElementById("3").setAttribute("style", "background-color: red;");
  btnsPlayed.push(3);
  btnValue.btn3 = 1;
}

function createX4() {
 //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("4").appendChild(textNode);
  document.getElementById("4").setAttribute("style", "background-color: red;");
  btnsPlayed.push(4);
  btnValue.btn4 = 1;
}

function createX5() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("5").appendChild(textNode);
  document.getElementById("5").setAttribute("style", "background-color: red;");
  btnsPlayed.push(5);
  btnValue.btn5 = 1;
}

function createX6() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("6").appendChild(textNode);
  document.getElementById("6").setAttribute("style", "background-color: red;")
  btnsPlayed.push(6);
  btnValue.btn6 = 1;
}

function createX7() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("7").appendChild(textNode);
  document.getElementById("7").setAttribute("style", "background-color: red;");
  btnsPlayed.push(7)
  btnValue.btn7 = 1;
}

function createX8() {
  //document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  var textNode = document.createTextNode("X");
  document.getElementById("8").appendChild(textNode);
  document.getElementById("8").setAttribute("style", "background-color: red;");
  btnsPlayed.push(8);
  btnValue.btn8 = 1;
}


// This is an AI function that has the AI pick a random square
// in the Tic Tac Toe Board.
function createAiCellAttribute() {

  // this function picks a random number between 0-8 that represents
  // the squares on the board.
function aiChoice () {
  var btnNum = Math.round(Math.random() * 8);
  return btnNum;
}

var btnNum = aiChoice();

// this function checks to see if any of the numbers are in the "Buttons Played"
//Array, if there is a match, the function calls the AI choice function again
// to create a new number, and the function calls itself to check again to see if
//the number is in the buttons played array. The function is in a while loop that will keep
//generating new numbers while the random number equals any numbers in the
// Buttons Played array.
function isPlayed () {
  for (var i = 0; i < btnsPlayed.length; i++) {
    while (btnNum === btnsPlayed[i]) {
      btnNum = aiChoice();
      isPlayed();
    }
  }
  return btnNum;
}

var cellNum = isPlayed();

// this function adds the number to the buttonsPlayed array to keep track
// of all new numbers played and generated.
function addtoBtnsPlayed () {
  btnsPlayed.push(cellNum);
  return btnsPlayed;
}

addtoBtnsPlayed();

// this turns the numbers created by the AI into a string
var cellNumStr = cellNum.toString();

// this function compares the string value of the numbers to the string value
// of the numbers in the "button values" object. If it finds a match, it will change
// the value of the corresponding number to 0. All "O" buttons played
//by the AI will equal to ZERO! In the end, each button value will either equal
// 1 if the user clicked the button, or 0, if the AI clicked a button.
function setMatrixValue(str) {
if (str === '0') {
  btnValue.btn0 = 0;
} else if (str === '1') {
  btnValue.btn1 = 0;
} else if (str === '2') {
  btnValue.btn2 = 0;
} else if (str === '3') {
   btnValue.btn3 = 0;
} else if (str === '4') {
  btnValue.btn4 = 0;
} else if (str === '5') {
  btnValue.btn5 = 0;
} else if (str === '6') {
  btnValue.btn6 = 0;
} else if (str === '7') {
  btnValue.btn7 = 0;
} else if (str === '8') {
  btnValue.btn8 = 0;
} else  {
  return btnValue;
}
}

setMatrixValue(cellNumStr)



// This function adds a "O" to the board with the corresponding numerical
//ID if there is less than 10 numbers captured in the Numbers Played Array,
// since there is only 9 options for squares.
 if (btnsPlayed.length < 9) {
  var textNode = document.createTextNode("O");
  document.getElementById(cellNumStr).appendChild(textNode);
}

};

// This function checks to see who is the winner by adding the values
// of the squares. Remember each square equals 0 or 1. If any row of squares
//equals 0 then the computer has won (0+ 0+ 0), however, if any row equals the
// number THREE, then the player has won because X = 1 and 1 + 1 + 1 = 3;

//There are 8 possible lines to win the game (3 horizontal, 3 vertical, 3 diagonal);
// if any of the rows equal 0 or 3, text is insertd using Dom Manipulation
// that tells you who the winner is via a textNode insertion to the "winner"
// ID at the top of the HTML code.
function isWinner() {
  if (btnValue.btn0 + btnValue.btn1 + btnValue.btn2 === 3){

  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";


  } else if (btnValue.btn0 + btnValue.btn1 + btnValue.btn2 === 0){

  var textNode = document.createTextNode("AI WON :(");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn3 + btnValue.btn4 + btnValue.btn5 === 3){

  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if (btnValue.btn3 + btnValue.btn4 + btnValue.btn5 === 0) {

  var textNode = document.createTextNode("AI WON :(");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn6 + btnValue.btn7 + btnValue.btn8 === 3) {

  var textNode = document.createTextNode("YOU WON");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if  (btnValue.btn6 + btnValue.btn7 + btnValue.btn8 === 0) {
  var textNode = document.createTextNode("AI WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn0 + btnValue.btn3 + btnValue.btn6 === 3) {

  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if (btnValue.btn0 + btnValue.btn3 + btnValue.btn6 === 0) {

  var textNode = document.createTextNode("AI WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "#344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn1 + btnValue.btn4 + btnValue.btn7 === 3) {

  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if (btnValue.btn1 + btnValue.btn4 + btnValue.btn7 === 0) {
  var textNode = document.createTextNode("AI WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn2 + btnValue.btn5 + btnValue.btn8 === 3) {
  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if (btnValue.btn2 + btnValue.btn5 + btnValue.btn8 === 0) {
  var textNode = document.createTextNode("AI WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn2 + btnValue.btn4 + btnValue.btn6 === 3) {
  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if (btnValue.btn2 + btnValue.btn4 + btnValue.btn6 === 0) {

  var textNode = document.createTextNode("AI WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";

  } else if (btnValue.btn0 + btnValue.btn4 + btnValue.btn8 === 3) {

  var textNode = document.createTextNode("YOU WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('http://www.myfreewallpapers.net/starwars/wallpapers/han-solo.jpg')";

  } else if (btnValue.btn0 + btnValue.btn4 + btnValue.btn8 === 0) {
  var textNode = document.createTextNode("AI WON!");
  document.getElementById("winner").appendChild(textNode);
  document.getElementById("winner").setAttribute("style", "color: #344560;");
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc--star-wars-birthday-darth-vader-birthday-cake.jpg')";
  }
}




// These functions call all the functions I just created when I click
// on a correponding square from 0-8. For example, the first function
// creates an X if I click On Square1
// and creates a Correponding AI "O" on a random box and checks to
//see if anybody has won the game.
function onClick0() {
  createX0();
  createAiCellAttribute()
  isWinner();
}

function onClick1() {
  createX1();
  createAiCellAttribute();
  isWinner();
}

function onClick2() {
  createX2();
  createAiCellAttribute();
  isWinner();
}

function onClick3() {
  createX3();
  createAiCellAttribute()
  isWinner();
}

function onClick4() {
  createX4();
  createAiCellAttribute();
  isWinner();
}

function onClick5() {
  createX5();
  createAiCellAttribute();
  isWinner();
}

function onClick6() {
  createX6();
  createAiCellAttribute();
  isWinner();
}

function onClick7() {
  createX7();
  createAiCellAttribute();
  isWinner();
}

function onClick8() {
  createX8();
  createAiCellAttribute();
  isWinner();
}




// this function reloads the page
function reloadHere(){
  location.reload();
}

// these functions add an event Listner to each click on a correponding square,
// for example, if the user clicks any square from 0-8, all the functions will
// execute.

window.onload = function() {
document.getElementById("0").addEventListener('click', onClick0);
document.getElementById("1").addEventListener('click', onClick1);
document.getElementById("2").addEventListener('click', onClick2);
document.getElementById("3").addEventListener('click', onClick3);
document.getElementById("4").addEventListener('click', onClick4);
document.getElementById("5").addEventListener('click', onClick5);
document.getElementById("6").addEventListener('click', onClick6);
document.getElementById("7").addEventListener('click', onClick7);
document.getElementById("8").addEventListener('click', onClick8);
// this function reloads the page if you click the "reload" button, preferably
// the user should do this after the user or the AI has won the game.
document.getElementById('button').addEventListener('click', reloadHere);
}


