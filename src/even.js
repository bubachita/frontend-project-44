import readlineSync from 'readline-sync';
// import userName from '';

function gameIsEven() {
  // Определение рандомного числа
  function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }

  // Общение с пользователем
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const result = () => {
    let rightAnswers = 0;

    while (rightAnswers !== 3) {
      const number = getRandomNumber();

      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');

      const rule1 = number % 2 === 0 && answer === 'yes';
      const rule2 = number % 2 === 1 && answer === 'no';

      if (rule1 === true || rule2 === true) {
        rightAnswers += 1;
        console.log('Correct!');
      }
      if (rule1 === false && rule2 === false) {
        const opposite = answer === 'yes' ? 'no' : 'yes';
        const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${opposite}'.`;
        console.log(errorMessage);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (rightAnswers === 3) console.log(`Congratulations, ${userName}!`);
  };
  result();
}
export default gameIsEven;
