export const useHelper = () => {
  const daysUntil = (targetDateStr) => {
    const targetDate = new Date(targetDateStr);

    const currentDate = new Date();

    const diffInTime = targetDate - currentDate;

    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  return {
    daysUntil,
  };
};
