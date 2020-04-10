const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  token: process.env.KEY,
  sd: process.env.STAND,
  rem: process.env.REM,
  t: process.env.T
};