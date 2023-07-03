const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kick",
  aliases: ["kike"],
  cooldown: 0,
  run: async (client, message, args) => {

    const slaver = process.env['id']
    const mem = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const embed = new EmbedBuilder()
    if (!mem) {embed.setColor("Orange").setDescription(`You need to mention a user.`);
      return message.reply({ embeds: [embed] });}
    //if (mem => member.user.bot) return message.channel.send('Bots cannot be kicked. Please try kicking a member.')
    if ((!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) && (!message.author.id === slaver)) {embed.setColor("Orange").setDescription(`You lack the required permissions.`);
      return message.reply({ embeds: [embed] });}
    if (mem.permissions.has(PermissionsBitField.Flags.KickMembers) || mem.permissions.has(PermissionsBitField.Flags.BanMembers) || (mem.id === slaver)) {embed.setColor("Orange").setDescription(`This user seems to be a an admin/mod, I cannot do that action on them.`);
      return message.reply({ embeds: [embed] });}

    try {
      member.kick().then(() => {
        embed.setTitle(`${member} was kicked!`)
        embed.setColor(0xFF0000)
        message.channel.send({ embeds: [embed] })
      })
    } catch(err){
            console.log(err);

            embed.setColor("Red").setDescription("⛔ | Something went wrong...");

            return message.reply({ embeds: [embed]});
            
        }
  }
};