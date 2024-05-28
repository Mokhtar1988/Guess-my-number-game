'use strict';
let score = 20;

let highscore = 0
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
// no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    // if the number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Winner';
    document.querySelector('body').style.backgroundColor = '#41B06E'
    document.querySelector('.number').textContent = secretNumber;
    if(score>highscore){
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // when number is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game';
      document.querySelector('body').style.backgroundColor = '#EE4E4E'
      document.querySelector('.number').textContent = secretNumber;

    }
    // when number is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game';
      document.querySelector('body').style.backgroundColor = '#EE4E4E'
      document.querySelector('.number').textContent = secretNumber;

    }
  }
});

// testing again button
document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20
  document.querySelector('.score').textContent =20
  document.querySelector('.message').textContent ='Start guessing...'
  document.querySelector('.guess').value = ""
  document.querySelector('.number').textContent ='?'
  document.querySelector('body').style.backgroundColor = '#222'

  
})
