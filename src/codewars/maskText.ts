export const maskify = (plainText: string): any => {
	const plainChars = plainText.slice(-4);
	const hashLength = (plainText.length - 4);

	const emptyString = ''
	const hashedCharacters = emptyString.padStart(hashLength, '#')

	return hashedCharacters.concat(plainChars)


}