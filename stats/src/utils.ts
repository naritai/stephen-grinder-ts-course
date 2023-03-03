export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((val): number => parseInt(val));
  const [year, month, day] = dateParts;
  return new Date(year, month - 1, day);
}