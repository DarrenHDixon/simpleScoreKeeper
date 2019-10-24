var p1 = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1score = 0;

var p2 = document.getElementById("p2");
var p2Display = document.querySelector("#p2Display");
var p2score = 0;

var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")
var reset = document.querySelector("#reset");

var gameOver = false;
var winningScore = 5;

p1.addEventListener("click",function(){
    if (!gameOver){
        p1score++;
        if(p1score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
    p1Display.textContent = p1score;
    }
});

p2.addEventListener("click",function(){
    if (!gameOver){
        p2score++;
        if(p2score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    p2Display.textContent = p2score;
    }
});

reset.addEventListener("click", function(){
    resetScore();
});

function resetScore(){
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}
input.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetScore();
});