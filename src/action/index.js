export const incNumer = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decrNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
export const multiplyNum = (num) => {
  return {
    type: "MULTIPLY",
    payload: num,
  };
};
export const divideNum = (num) => {
  return {
    type: "DIVIDE",
    payload: num,
  };
};
