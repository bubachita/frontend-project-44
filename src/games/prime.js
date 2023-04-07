import game from '../index.js';

const gamePrime = () => {
  // Условие игры
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionAndAnswer = () => {
    // Формирование вопроса
    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const question = getRandomNumber();

    // Вычисление верного ответа
    const isPrime = (number) => {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) return 'no';
      }
      return 'yes';
    };

    const correctAnswer = isPrime(question);
    return [question, correctAnswer];
  };

  game(condition, questionAndAnswer);
};

export default gamePrime;
