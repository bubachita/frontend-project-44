import game from '../index.js';

const gameIsEven = () => {
  // Условие игры
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionAndAnswer = () => {
    // Формирование вопроса
    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const question = getRandomNumber();

    // Вычисление верного ответа
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  game(condition, questionAndAnswer);
};

export default gameIsEven;
