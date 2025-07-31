export const gigasecond = (date) => {
  const startDate = new Date(date);
  return new Date(startDate.getTime() + 1000000000000);
};

