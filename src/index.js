import readlineSync from 'readline-sync';

const game = (condition, questionAndAnswer) => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // вывод правил игры
  console.log(condition);

  // цикл с вопросами и ответами
  let rightAnswers = 0;
  while (rightAnswers !== 3) {
    const info = questionAndAnswer();
    const question = info[0];
    const correctAnswer = info[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    // проверка и вывод результатов
    if (answer === String(correctAnswer)) {
      rightAnswers += 1;
      console.log('Correct!');
    } else {
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(errorMessage);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (rightAnswers === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
