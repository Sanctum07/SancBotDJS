const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kick",
  aliases: ["kike"],
  cooldown: 0,
  run: async (client, message, args) => {

    const slaver = process.env['id']
    const mem = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!mem) return message.channel.send('You need to mention a user.')
    if (mem => member.user.bot) return message.channel.send('Bots cannot be kicked. Please try kicking a member.')
    if ((!message.mem.permissions.has(PermissionsBitField.Flags.KickMembers)) && (!message.author.id === slaver)) return message.channel.send('You lack the required permissions')
    if (mem.permissions.has(PermissionsBitField.Flags.KickMembers) || mem.permissions.has(PermissionsBitField.Flags.BanMembers) || (mem.id === slaver)) return message.channel.send('User is higher or equal to me. Cannot kick')

    try {
      member.kick().then(() => {
        message.channel.send(`Kicked ${mem} successfully.`)
      })
    } catch (err) {
      console.log(err)
      message.channel.send('Oops, something went wrong.')
    }
  }
};