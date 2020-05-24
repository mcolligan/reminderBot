const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  token: process.env.KEY,
  sd: process.env.STAND,
  rem: process.env.REM,
  jr: process.env.JR, // currently bld10
  cred: process.env.CREDENTIALS_PATH,
  calId: process.env.CALENDAR_ID,
  prLink: process.env.PAIR_FORM_LINK,
};
