const ChangeMachine = (input) => {
  const acceptedAmounts = ["£5", "£2", "£1", "50p", "20p"];
  const changeDenoms = ["20p", "10p"];
  const changeDenomsValues = [20, 10];

  if (!acceptedAmounts.includes(input)) {
    return input;
  }

  let inputInPence = convertToPence(input);
  let change = "";

  for (let i = 0; i < changeDenoms.length; i++) {
    while (inputInPence >= changeDenomsValues[i]) {
      inputInPence -= changeDenomsValues[i];
      change += changeDenoms[i] + " ";
    }
  }

  return change.trim();
};

const convertToPence = (input) => {
  if (input.includes("£")) {
    return parseInt(input.replace("£", "")) * 100;
  } else if (input.includes("p")) {
    return parseInt(input.replace("p", ""));
  }
};

console.log(ChangeMachine("20p"));
