const { token } = require('../config.js');
const cron = require('node-cron');
const Discord = require('discord.js');
const client = new Discord.Client();

const today = () => {
  let day = new Date();
  return day.getDay();
};

client.once('ready', () => {
  console.log(`Ava Start Time: ${new Date()}`);

  cron.schedule('30 12 * * *', () => {
    if (today() !== 0) {
      client.channels.cache.get('696742553118179348').send(`Yay. Lunch Time!`);
    }
  });

  cron.schedule('30 17 * * *', () => {
    let now = today();

    if (now !== 6 && now !== 0) {
      client.channels.cache.get('696742553118179348').send(`Dinner Time! Enjoy.`);
    }
  });
});

client.login(token);
