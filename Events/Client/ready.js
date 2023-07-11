const { Client, ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    execute(client){
        console.log(`${client.user.username} online aala!`);
        try{ 
            client.user.setActivity({
                name: "bot commands.",
                type: ActivityType.Listening,
                //url: `` 
              }
            );
        } catch(err){
            console.log(err);
        }
    },
};
