const { token, sd, rem, t } = require('../config.js');
const cron = require('node-cron');
const Discord = require('discord.js');
const client = new Discord.Client();

const today = () => {
  let day = new Date();
  return day.getDay();
};

client.once('ready', () => {
  console.log(`Ava Start Time: ${new Date()}`);

  cron.schedule('45 19 * * *', () => {
    let now = today();

    if (now !== 6 && now !== 0) {
      client.channels.cache.get(sd).send(`@everyone Let's stand down`);
    }
  });

  cron.schedule('15 17 * * *', () => {
    if (today() === 6) {
      client.channels.cache.get(sd).send(`@everyone Let's stand down`);
    }
  });

  cron.schedule('30 12 * * *', () => {
    if (today() !== 0) {
      client.channels.cache.get(rem).send(`Yay. Lunch Time!`);
    }
  });

  cron.schedule('30 17 * * *', () => {
    let now = today();

    if (now !== 6 && now !== 0) {
      client.channels.cache.get(rem).send(`Dinner Time! Enjoy.`);
    }
  });
});

client.login(token);
