var colors= generateRandomColors(6);

var turns=0;

var squares= document.querySelectorAll(".square");
var pickedColor= colorPicker();
var result = document.querySelector("#displayResult");

var newGame = document.querySelector("#newGame");
var newScore = document.querySelector(".score");
colorDisplay = document.querySelector("#display");
colorDisplay.textContent = pickedColor;


var mode=6;
var easy=document.querySelector("#easyButton");
var hard=document.querySelector("#hardButton");

easy.addEventListener("click", function easyGame() {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  mode=3;
  createNewGame(mode);
  for(var i=3;i<6;i++)
  {
    squares[i].style.backgroundColor="#232323";
  }
})

hard.addEventListener("click", function hardGame() {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  mode=6;
  createNewGame(mode);
})



for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]; 

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      var win = false;
      if(mode ==3 ){
        score = 50 - (15*turns);
        if(score > 30) win =  true;
      }
      else 
      {
        score = 100 - (15*turns);
        if(score > 70) win = true;
      }
      
      if(win)
      {
        result.textContent="CONGO!! You won : Score :"+score;
      }
      else{
        result.textContent="SORRY :( You lost : Score :"+score;
      }
      
      
      correctAnswer(clickedColor);
      newGame.textContent = "Play Again";
      
    }
    else {
      this.style.backgroundColor="#232323";
      result.textContent="Try Again";
      turns++;
    }
  });
}

function correctAnswer(color) {
  for(var i=0; i<colors.length;i++)
  {
    squares[i].style.backgroundColor = color;
  }
  document.querySelector("h1").style.backgroundColor=color;
}

function colorPicker() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num)
{
  var arr  = [];

  for(var i=0; i< num; i++)
  {
    arr[i]=randomColor();
  }

  return arr;
}

function randomColor() 
{
  var r1 = Math.floor(Math.random() * 256);
  var r2 = Math.floor(Math.random() * 256);
  var r3 = Math.floor(Math.random() * 256);
  var newColor = "rgb("+r1+", "+r2+", "+r3+")";

  return newColor;
}

newGame.addEventListener("click", () =>createNewGame(mode))

function createNewGame( num){
  colors = generateRandomColors(num);
  pickedColor = colorPicker();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  document.querySelector("h1").style.backgroundColor = "steelblue";
  newGame.textContent = "New Game";
  result.textContent = "";
  turns=0;
}