'use strict';

//проверка что на входе число
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const random = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  // console.log(Math.floor(random(1, 100)));

const randomFloor = Math.floor(random(1, 100));


  function compareNumbers(num){
    let number = prompt('Угадай число от 1 до 100');
    if (number === null){
        alert('GAME OVER');
    } 
    else if (!isNumber(number)){
        alert('Введи число!');
        compareNumbers(num);
     }
    else if (+number < num){
        alert('Загаданное число меньше');
        compareNumbers(num);
    } else if (+number > num){
        alert('Загаданное число больше');
        compareNumbers(num);
    }
    else if (+number === num){
      alert('YOU ARE WIN!!');
   }
  }

  console.log(compareNumbers(randomFloor));