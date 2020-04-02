const { token } = require('../config.js');
const cron = require('node-cron');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Bot Start Time: ${new Date()}`);
  // console.log('--', client.channels)
  cron.schedule('30 12 * * *', () => {
    client.channels.cache.get('695103171017834557').send(`Yay. Lunch Time!`);
  });

  cron.schedule('30 17 * * *', () => {
    client.channels.cache.get('695103171017834557').send(`Dinner Time! Enjoy.`);
  });
});

client.login(token);
