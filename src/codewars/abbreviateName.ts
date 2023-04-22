export const nameToInitials = (fullName: string): string => {
  const splitName = fullName.split(' ') as [string, string];

  const [name, surname] = splitName;

  const firstInital = name.charAt(0);
  const secondInital = surname.charAt(0);

  const inital = `${firstInital}.${secondInital}`;

  return inital.toUpperCase();
};