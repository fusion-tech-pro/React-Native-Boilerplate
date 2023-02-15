export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getArray = (count: number) => {
  const resultArray = [];

  for (let i = 1; i <= count; i += 1) {
    resultArray.push(i);
  }

  return resultArray;
};
