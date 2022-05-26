'use strict';
//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const curren0El = document.getElementById('current--0');
const curren1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activPlayer = 0;
let gameActive = true;

const switchPlayer = function (){
    document.querySelector(`#current--${activPlayer}`).textContent = 0;
    activPlayer = activPlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling functionality
btnRoll.addEventListener('click', function () {
    if (gameActive) {
        //generate roleDice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //Display roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check if 1
    if(dice !== 1){
        currentScore += dice;
        document.querySelector(`#current--${activPlayer}`).textContent = currentScore;
    } else {
       //switch player
       switchPlayer();
    }
    }
});

btnHold.addEventListener('click', function(){
   if (gameActive) {
        //add score to global score
    scores[activPlayer] += currentScore;
    document.querySelector(`#score--${activPlayer}`).textContent = scores[activPlayer]
    //check if >100
    // finish the gAME
    if (scores[activPlayer] >= 20) {
        document.querySelector(`.player--${activPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activPlayer}`).classList.remove('player--active');
        gameActive = false;
        diceEl.classList.add('hidden');
    } else {
        //CHANGE THE player
    switchPlayer();
    }
   }
})

btnNew.addEventListener('click', function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    curren0El.textContent = 0;
    curren1El.textContent = 0;
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    document.querySelector(`.player--${activPlayer}`).classList.remove('player--winner');
    activPlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    gameActive = true;
})
