export const countVowels = (input: string): any => {
  const letterArray = input.split('');
  let vowelCount = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const pattern = /^[aeiou]*$/;

  //   letterArray.forEach((letter) => pattern.test(letter) && vowelCount++);

  letterArray.forEach((letter) => {
    if (pattern.test(letter)) {
      vowelCount++;
    }
  });

  //   for (const letter of letterArray) {
  //     switch (letter) {
  //       case 'a':
  //       case 'e':
  //       case 'i':
  //       case 'o':
  //       case 'u':
  //         vowelCount = vowelCount + 1;
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  return vowelCount;
};
