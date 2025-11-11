export const formatDateShort = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};
