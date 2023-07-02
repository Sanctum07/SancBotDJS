const { ChannelType, Collection, Events, CommandInteraction } = require("discord.js")

module.exports = {
  name: "messageCreate",
  
  execute: async (message) => {
    let client = message.client;
    if (message.author.bot) return;
    if (message.channel.type === ChannelType.DM) return;
    let prefix = "?"
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.pcommands.get(cmd)
    if (!command) command = client.pcommands.get(client.commandaliases.get(cmd));

    if (command) {
      command.run(client, message, args)
    }
  }
};