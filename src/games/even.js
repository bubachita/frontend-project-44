import game from '../index.js';

const gameIsEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

  const array = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const question = getRandomNumber();
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  game(condition, array);
};

/* const result = () => {
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
} */

export default gameIsEven;
