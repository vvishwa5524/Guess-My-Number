'use strict';
let score = 20;
const random= function(){
    return Math.trunc(Math.random()*20) +1;
}
const displayMessage = function(message){
    document.querySelector('.message').textContent = message; 
}
let secretNumber = random();
document.querySelector('.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value);
if(!guess){
    //document.querySelector('.message').textContent = "⛔ No Number";
    displayMessage("⛔ No Number");
}
else if(guess === secretNumber){
    //document.querySelector('.message').textContent = "🥳 Correct Number !";
    displayMessage("🥳 Correct Number !");
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').textContent = guess;
    let highScore=Number(document.querySelector('.highscore').textContent);
    if(score>highScore){
        document.querySelector('.highscore').textContent = score;
    }
}
else if(guess!==secretNumber){
    if(score > 1){
        //document.querySelector('.message').textContent = guess>secretNumber?"📈 Too high !":"📉 Too Low !";
        displayMessage(guess>secretNumber?"📈 Too high !":"📉 Too Low !");
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            //document.querySelector('.message').textContent = "🤦‍♂️ You lost the Game !";
            displayMessage("🤦‍♂️ You lost the Game !");
            document.querySelector('.score').textContent=0;
        }
}
// else if(guess > secretNumber){
//     if(score > 1){
//     document.querySelector('.message').textContent = "📈 Too high !";
//     score--;
//     document.querySelector('.score').textContent=score;
//     }
//     else{
//         document.querySelector('.message').textContent = "🤦‍♂️ You lost the Game !";
//         document.querySelector('.score').textContent=0;
//     }
// }
// else if(guess < secretNumber){
// if(score>1){
//     document.querySelector('.message').textContent = "📉 Too Low !";
//     score--;
//     document.querySelector('.score').textContent=score;
// }
// else{
//     document.querySelector('.message').textContent = "🤦‍♂️ You lost the Game !";
//     document.querySelector('.score').textContent=0;
// }
// }
}) ;

document.querySelector('.again').addEventListener('click',function(){
 document.querySelector('.score').textContent=20;
 score=20;
 secretNumber = random();
 document.querySelector('body').style.backgroundColor = "#222";
 document.querySelector('.number').textContent="?";
 //document.querySelector('.message').textContent="Start guessing...";
 displayMessage("Start guessing ...");
 document.querySelector('.guess').value="";
});

