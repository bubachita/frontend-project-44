import game from '../index.js';

const gameProgression = () => {
  // Условие игры
  const condition = 'What number is missing in the progression?';

  const questionAndAnswer = () => {
    // Подбор начальных и конечных(нестрого) значений
    const getRandomFirstNum = () => Math.floor(Math.random() * 20) + 1;
    const getRandomLastNum = () => Math.floor(Math.random() * 60) + 20;
    const firstNum = getRandomFirstNum();
    const lastNum = getRandomLastNum();

    // Функция для составления прогрессии
    const getProgression = () => {
      const length = 10;
      const step = Math.round((lastNum - firstNum) / length);

      const array = [];
      array.push(firstNum);

      for (let i = 1; i < length; i += 1) {
        array.push(array[i - 1] + step);
      }

      return array;
    };
    const progression = getProgression();

    // Вычисление верного ответа и замена случайного элемента на ..
    const i = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[i];
    progression[i] = '..';

    // Формирование вопроса
    const question = progression.join(', ');
    return [question, correctAnswer];
  };

  game(condition, questionAndAnswer);
};

export default gameProgression;
