const bruteForce = (numList: number[]): any => {
	let sum = 0;
  numList.forEach((value) => {
    let count = 0;

    numList.forEach((testValue) => {
      if (testValue === value) {
        count++;
      }
    });

	if(count === 1){
		sum += value;
	}

  });

  return sum;
};
