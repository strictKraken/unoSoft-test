export const useVkDate = () => {
  const parsedDate = (date: string): Date | null => {
    const dateParts: string[] = date.split(".");

    if (!dateParts[2]) return null;

    const jsDate: Date = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
    return jsDate;
  };
  return { parsedDate };
};
