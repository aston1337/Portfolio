// 'use strict';
// console.log(document.querySelector('.score').textContent = 13);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;


let secretNumber = Math.ceil(Math.random()*20);
let score = 20;
let highScore = 0;
const DomSelect = function(element, message) {
    document.querySelector(element).textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.ceil(Math.random()*20);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number'
    } else if (guess === secretNumber) {
        DomSelect('.message', 'You are Correct, Sir!!!╰(*°▽°*)╯');
        DomSelect('.number', secretNumber);
        if (score > highScore) {
            highScore = score;
            DomSelect('.highscore', highScore);
        }

        document.querySelector('body').style.backgroundColor = '#60b347';
    } else if(guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'The number is too high...' : 'The number is too low...';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            score--;
        document.querySelector('.score').textContent = 0;
        }
    } 
});


