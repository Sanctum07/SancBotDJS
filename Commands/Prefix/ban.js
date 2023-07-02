const { EmbedBuilder, PermissionsBitField } = require("discord.js");


module.exports = {
    name: "ban",
    aliases: ["banish"],
    run: async (client, message, args) => {
        const say = message.content.split(" ")
        const content = say.slice(2).join(" ")

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.channel.send('You need to mention a user.')
        if ((!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))&&(!message.author.id === slaver)) return message.channel.send('You lack the required permissions')
        if (member.permissions.has(PermissionsBitField.Flags.BanMembers) || member.permissions.has(PermissionsBitField.Flags.BanMembers)||member.id === slaver) return message.channel.send('This user seems to be a an admin/mod, I cannot do that action on them')

        try {
            member.ban().then(() => {
                message.delete()
                const embed = new EmbedBuilder()
                    .setTitle(`${member} was banned!`)
                    .setDescription(`**Reason: **\n${content}`)
                    .setColor(0xFF0000)
                message.author.send({ embeds: [embed] })
                message.channel.send({ embeds: [embed] })
            })
        } catch (err) {
            console.log(err)
            message.channel.send('Oops, something went wrong.')
        }
    }
};