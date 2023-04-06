import game from '../index.js';

const gameCalc = () => {
  // Условие игры
  const condition = 'What is the result of the expression?';

  const questionAndAnswer = () => {
    // Подбор рандомных чисел от 1 до 20
    const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;
    const firstNum = getRandomNumber();
    const secondNum = getRandomNumber();

    // Подбор рандомного оператора
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * 3)];

    // Формирование вопроса
    const question = `${firstNum} ${operator} ${secondNum}`;

    // Вычисление верного ответа
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = firstNum + secondNum;
        break;
      case '-':
        correctAnswer = firstNum - secondNum;
        break;
      case '*':
        correctAnswer = firstNum * secondNum;
        break;
      default:
        break;
    }

    return [question, correctAnswer];
  };

  game(condition, questionAndAnswer);
};

export default gameCalc;
