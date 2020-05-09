import md5 from 'md5';

export const gravatar = (email) => {
  const baseUrl = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });

  return `${baseUrl}${hash}`;
};

export const coinFactor = (coinType, value) => {
  let result = value * (coinType === 'usd' ? 1 : 0.92);
  return Number(result.toFixed(2));
};

export const coinSymbol = (coinType) => {
  return coinType === 'usd' ? '$' : '£';
};
