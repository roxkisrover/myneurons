export const getResultArr = (answers) => {
  const result = new Array(10).fill(0);

  answers.forEach((answer) => {
    for (let i = 0; i < answer.target.length; i += 1) {
      result[answer.target[i]] += answer.value;
    }
  });

  return result;
};

export const getIndexOfMaxValue = arr => arr.indexOf(Math.max(...arr));
