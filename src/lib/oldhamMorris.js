export const getResultArr = (answers, typesCount) => {
  const result = new Array(typesCount).fill(0);

  answers.forEach((answer) => {
    for (let i = 0; i < answer.target.length; i += 1) {
      result[answer.target[i]] += answer.value;
    }
  });

  return result;
};

export const getIndexOfMaxValue = arr => arr.indexOf(Math.max(...arr));
