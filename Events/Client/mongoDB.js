const mongoose = require('mongoose');
const config = require("../../Snippets/config.js");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        
        await mongoose.connect(config.mongodb || '', {
			dbName: config.mongoName,
            keepAlive: true,
           
        });


        if (mongoose.connect) {
        
            console.log('[+]'.green + ' MongoDB connection succesful.')
       
        }
      

    },
};