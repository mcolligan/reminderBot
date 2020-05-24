const makeCronString = (dateTime) => {
  return `${dateTime.slice(14, 16)} ${dateTime.slice(11, 13)} * * *`;
};

const today = () => {
  let day = new Date();
  return day.getDay();
};

module.exports = { makeCronString, today };
