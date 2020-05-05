export const coinFactor = (coinType, value) => {
  let result = value * (coinType === 'usd' ? 1 : 0.92);
  return Number(result.toFixed(2));
};

export const coinSymbol = (coinType) => {
  return coinType === 'usd' ? '$' : '£';
};
