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
