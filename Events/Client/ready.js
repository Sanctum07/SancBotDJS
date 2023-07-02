const { Client, ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    execute(client){
        console.log(`${client.user.username} online aala!`);
        try{ 
            client.user.setActivity('Use /help to see the list of commands!', { type: ActivityType.Playing });
        } catch(err){
            console.log(err);
        }
    },
};
