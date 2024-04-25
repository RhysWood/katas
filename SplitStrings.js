const splitstrings = (str) => {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  const result = [];
  for (let i = 0; i < str.length; i = i + 2) {
    result.push(str[i] + str[i + 1]);
  }
  return result;
};
console.log(splitstrings("abcdefg"));
