// length = 20
const input = [1, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 5, 7, 7, 7, 7, 8, 9, 9, 9];

const findUniques = (numberArray: number[]): any => {
  const valueToChcek = numberArray[0];
  let newArray: number[] = [];

  for (let index = 1; index < numberArray.length; index++) {
    if (valueToChcek === numberArray[index]) {
      newArray = numberArray.filter((value) => value !== valueToChcek);

      break;
    }
  }
  if (newArray.length > 1) {
    return findUniques(newArray);
  }
  console.log(newArray);
  return newArray[0];
};

console.log(findUniques(input));
