export const currencySwap = (currencyValue01, currencyValue02, theMoney) => {
  let ExchangeRate = currencyValue01 / currencyValue02;
  let result = theMoney * ExchangeRate;
  console.log(result);
  return result;
};
