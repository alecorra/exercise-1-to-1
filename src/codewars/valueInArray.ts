export const isValueInArray = (data: any[], requiredValue: any): boolean => {
  const result = data.find((value) => value === requiredValue );
  return Boolean(result);
}