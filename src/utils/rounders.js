export const roundStr = (str) => {
  if (str.length < 100) return str;
  return `${str.slice(0, str.indexOf(' ', 100))}...`;
};

export const roundNum = (num) => {
  if (num < 1000) return num;
  const rounded = (num / 1000).toFixed(1);
  const formatted = (rounded * 10) % 10 === 0 ? Math.floor(rounded) : rounded;
  return `${formatted}K`;
};
