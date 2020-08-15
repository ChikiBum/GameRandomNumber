'use strict';

//проверка что на входе число
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const random = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  // console.log(Math.floor(random(1, 100)));

  function compareNumbers(){
    
    const num = Math.floor(random(1, 100));
    let count = 0;

    console.log(count);
    console.log(num);
    
    return (function repeat(){
        count++;
        // console.log(count);
          
        const number = prompt('Угадай число от 1 до 100');

        if (count <= 10){

        if (number === null){
            alert('GAME OVER');
            return;
        } 
        else if (!isNumber(number)){
            alert('Введи число!');
            
        }
        else if (+number < num){
            alert(`Загаданное число меньше, осталось попыток ${10 - count}`);
            
        } else if (+number > num){
            alert(`Загаданное число больше, осталось попыток ${10 - count}`);
        }
        else if (+number === num){
          const confirmRes = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (confirmRes){
            compareNumbers(num);
          } else {
          return;
          }
      }
      repeat();
    } else {
          const confirmRes = confirm('Попытки закончились, хотите сыграть еще?');
          if (confirmRes){
            compareNumbers(num);
          } else {
          return;
          }
      }
  
      })();
  }

 compareNumbers();