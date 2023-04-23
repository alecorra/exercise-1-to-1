export const isValueInArray = (data: any[], requiredValue: any): boolean => {
  const result = data.find((value) => value === requiredValue );
  if(result === 0){
	return true;
  }
  return Boolean(result);
}