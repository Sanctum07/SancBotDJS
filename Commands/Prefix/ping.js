const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  run: async (client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const embed = new EmbedBuilder();
    embed.setTitle("Bot Ping")
    embed.setDescription(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms. Bot Latency is ${Math.round(client.ws.ping)}ms\n\n**Uptime:** ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`,)
    embed.setColor("Green")
    message.reply({ embeds: [embed]})
  }
};