'use strict';
console.log((document.querySelector('.again').textContent = 'နောက်တဖန်'));
document.querySelector('.number').textContent = '!ခန့်မှန်းပါ';
document.querySelector('.check').textContent = '!စစ်ဆေး';

//let number = Number((document.querySelector('.number').value = 15));
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', () => {
  //  let luckyNumber = Math.trunc(Math.random() * 20 + 1);
  number = Math.trunc(Math.random() * 20 + 1);
  //number=10;
  //console.log('dice'+number);
  //  number = luckyNumber;
  document.querySelector('.number').textContent = '!မှန်းပါ';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log('Lucky number is : ' + number);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
}); //this is change lucky number
console.log(number);
document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (guessNumber === number) {
    document.querySelector('.message').textContent = 'This number is equal';
    document.querySelector('.number').textContent = 'အနိုင်ရရှိပါသည်';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (!guessNumber) {
    document.querySelector('.message').textContent =
      'This is no number Please enter again';
  } else if (guessNumber > 20) {
    document.querySelector('.message').textContent =
      'This number is over 20,Please enter again';
  } else if (guessNumber > number) {
    score--;
    document.querySelector('.message').textContent = 'This number is high';
    document.querySelector('.score').textContent = score;
  } else if (guessNumber < number) {
    score--;
    document.querySelector('.message').textContent = 'This number is low';
    document.querySelector('.score').textContent = score;
  }
  if (score < 1) {
    document.querySelector('.message').textContent =
      'Chance is over ,can you play again';
    document.querySelector('.number').textContent = 'LOOSER';
    document.querySelector('body').style.background = '#fa0404';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = 0;
  }
  console.log(guessNumber);
  console.log(score);
});
