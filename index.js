const { Client, GatewayIntentBits, Partials, Collection, } = require("discord.js");

//INICIALIZAÇÃO DA PASTA EVENT & COMMAND
const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

//INTENTS DO BOT
const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

client.config = require("./Snippets/config.js");
client.giveawayConfig = require("./Snippets/config.js");
client.commands = new Collection();

module.exports = client;

// INICIALIZAÇÃO DO BOT
client.login(client.config.token).then(() => {
  loadEvents(client);
  loadCommands(client);
});

// ANTI CRASH
const logs = require('discord-logs');

logs(client, { debug: true });
process.on('unhandledRejection', (reason, p) => {
  console.log(reason, p)
});

process.on("uncaughtException", (err, origin) => {
  console.log(err, origin)
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err, origin)
});
process.on('multipleResolves', (type, promise, reason) => { });