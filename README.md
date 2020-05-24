# Dolores

Discord Reminder Bot

## Getting Started

###### Discord

Go here to create you invite link and add your bot- https://discord.com/developers/applications
Docs: https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links

###### Google API

Go here -- https://console.developers.google.com/
Create a new project. Then enable the calendar api for your project. Finally create the credentials for your project.

Copy your "client id" and "client secret" into the credentials.json file.

The first time you npm start, you will get a notification to create the token for the project. Follow the link and paste the given code into terminal. This will create your token.json file.

###### .env

You will need to create a .env file in the root of you project.

Fields for .env are:

1. Token
2. Any channel id's for the channels to send reminders/messages
3. Google Canlendar ID
4. Google API credentials dir path
5. Anything else you want to keep secret
6. Addjust the config.js file accordingly

_If you work at Galvanize, and your name is Teddi, I will supply this for you_

###### Spin it up

```
$ npm start
```

_Again, if your name is Teddi contact me if there are any question._
