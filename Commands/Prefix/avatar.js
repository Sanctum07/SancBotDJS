const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["av"],
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.member || message.author;
        if(!user) return
        const embed = new EmbedBuilder()
        .setTitle("Avatar Command")
        .setDescription("Here is the user's avatar: ",)
        .setColor(0xFFE400)
        .setImage(user.displayAvatarURL({ dynamic: true }))
        message.channel.send( { embeds : [embed] } )

    }
 };