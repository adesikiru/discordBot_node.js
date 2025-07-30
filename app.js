
//invite links for bot https://discord.com/oauth2/authorize?client_id=1400062630856757269&permissions=2048&integration_type=0&scope=bot
/* import { Client } from 'discord.js';
const client = new Client({}); */
/* const Client = new Discord.Client({intents:["GUILDS", "GUILDS_MESSAGES", "DIRECT_MESSAGES"]}); */
/* 
const Discord = require('discord.js');
const Client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent // Needed to read message text
  ]
}); */
/* 
const { Client, GatewayIntentBits, Discord } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
}); */

import 'dotenv/config'; // This line loads all variables from .env file

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Event handler for when bot comes online
client.once('ready', () => {
  console.log(`✅ Bot is online! Logged in as ${client.user.tag}`);
});

// Event handler for messages (optional - for testing)
client.on('messageCreate', (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;
  
  // Simple ping command for testing
  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  }
});

// Login with your bot token (remove the extra "M" at the beginning)
// Now you can access the token using process.env.DISCORD_TOKEN
client.login(process.env.DISCORD_TOKEN); // Replace 'process.env.DISCORD_TOKEN' with your actual bot token