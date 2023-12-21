var imgs = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var randomNum1 = Math.floor(Math.random() * 6);
var randomNum2 = Math.floor(Math.random() * 6);

var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];

img1.setAttribute('src', "images/" + imgs[randomNum1]);
img2.setAttribute('src', "images/" + imgs[randomNum2]);

var resultText = document.getElementsByTagName('h1')[0];

if(randomNum1 > randomNum2){
    resultText.textContent = "Player 1 Wins!";
}else if(randomNum2 > randomNum1){
    resultText.textContent = "Player 2 Wins!";
}else{
    resultText.textContent = "Draw!";
}