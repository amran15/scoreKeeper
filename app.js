//selecting player 1button
const p1Button = document.querySelector('#p1Button');

//selecting player 1button
const p2Button = document.querySelector('#p2Button');

//selecting span for player 1 score
const p1Display = document.querySelector('#p1Display');
//selecting span for player 2 score
const p2Display = document.querySelector('#p2Display');

//selecting reset button
const resetButton = document.querySelector('#reset');


let p1Score = 0;
let winningScore = 5;
let p2Score = 0;

let isGameOver = false; 

p1Button.addEventListener('click', function(){
    if(!isGameOver) {
        p1Score += 1;
        //if score equals winning score, game is over
        if(p1Score === winningScore){
            isGameOver = true;
        }
        p1Display.textContent = p1Score; 
    }
});

p2Button.addEventListener('click', function() {
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

//reset score back to 0
resetButton.addEventListener('click', function() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    //p1display text captures value of 0 from p1score
    p1Display.textContent = p1Score;
     //p2display text captures value of 0 from p2score
    p2Display.textContent = p2Score;
})