export const countMinusFive = (start: number, end: number): number => {
  let currentPos = start;
  let count = 0

  while (currentPos <= end) {
    !currentPos.toString().includes('5') && count++;
	currentPos++;
  }

  return count;
};
