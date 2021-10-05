export const convertUnit = (val, type = "C") => {
  let newVal;
  if (type === "C") {
    newVal = Math.round((val - 32) * (5 / 9));
  } else if (type === "F") {
    newVal = Math.round(val * (9 / 5) + 32);
  }

  return newVal;
};
