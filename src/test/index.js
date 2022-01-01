export const remainDay = (day1, day2) => {
  const remainDay1 = new Date(day1);
  const remainDay2 = new Date(day2);
  return Math.ceil(
    (remainDay2.getTime() - remainDay1.getTime()) / (1000 * 60 * 60 * 24)
  );
};
