const { getCalendarEvents } = require('./googleEvents/googleEvents');
const cron = require('node-cron');
const Discord = require('discord.js');

const { token, sd, rem, prLink, jr, jrRole } = require('../config.js');
const { makeCronString, today } = require('./utils/bot.utils');

const client = new Discord.Client();

/////////////////////////////////////////////////////

client.once('ready', () => {
  console.log(`Dolores Start Time: ${new Date()}`);

  //        STAND DOWN                         //
  cron.schedule('48 19 * * *', () => {
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
  //////////////////////////////////////////////////////////

  //        LUNCH/DINNER                               //
  cron.schedule('30 12 * * *', () => {
    if (today() !== 0) {
      client.channels.cache.get(rem).send(`Yay. Lunch Time!`);
    } else {
      // clear reminders channel on sundays - day 0 Teddi :)
      let remCh = client.channels.cache.get(rem);
      remCh.messages.fetch({ limit: 15 }).then((msg) => {
        remCh.bulkDelete(msg);
      });
    }
  });

  cron.schedule('30 17 * * *', () => {
    let now = today();

    if (now !== 6 && now !== 0) {
      client.channels.cache.get(rem).send(`Dinner Time! Enjoy.`);
    }
  });
  //////////////////////////////////////////////////////////////

  //        PAIR FEEDBACK                                     //
  let pairFeedbackJob;
  cron.schedule('30 08 * * *', () => {
    if (pairFeedbackJob) {
      pairFeedbackJob.destroy();
    }
    getCalendarEvents((res) => {
      if (res) {
        let pairFeedbackTime = makeCronString(res.pairRef);
        pairFeedbackJob = cron.schedule(`${pairFeedbackTime}`, () => {
          client.channels.cache
            .get(jr)
            .send(
              `${jrRole} Please fill out the pair reflection form. Thank you and good day -- ${prLink}`
            );
        });
      }
    });
  });
  /////////////////////////////////////////////////////////////////
});

client.login(token);
