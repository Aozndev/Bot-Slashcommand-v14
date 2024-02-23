const { ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const config = require("../../Snippets/config.js");
require("colors");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        const activities = [`Base Ryanpsy`];
        //const activities = [`Memoria: ${(process.memoryUsage().heapUsed / 2000 / 2000).toFixed(2) + 'MB / 2.000GB'}`];
        let i = 0;

        setInterval(() => client.user.setPresence({ activities: [{ name: activities[i++ % activities.length], type: ActivityType.Watching }] }), 15000);
        console.log(`Base criada por Ryanpsy `);

    },
};
