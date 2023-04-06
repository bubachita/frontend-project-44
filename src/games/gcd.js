import game from '../index.js';

const gameGCD = () => {
  // Условие игры
  const condition = 'Find the greatest common divisor of given numbers.';

  const questionAndAnswer = () => {
    // Формирование вопроса
    const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;
    const firstNum = getRandomNumber();
    const secondNum = getRandomNumber();
    const question = `${firstNum} ${secondNum}`;

    // Функция для нахождения GCD
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };

    // Вычисление верного ответа
    const correctAnswer = gcd(firstNum, secondNum);
    return [question, correctAnswer];
  };

  game(condition, questionAndAnswer);
};

export default gameGCD;
