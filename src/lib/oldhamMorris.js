export const getScore = (answers, typesCount) => {
  const score = new Array(typesCount).fill(0);

  answers.forEach((answer) => {
    for (let i = 0; i < answer.target.length; i += 1) {
      score[answer.target[i]] += answer.value;
    }
  });

  return score;
};

export const getIndexOfMaxValue = arr => arr.indexOf(Math.max(...arr));
