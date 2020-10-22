const discord = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class serverCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'serverinfo',
      aliases: ['si', 'server-info', 'server-information', 'serverinformation'],
      group: 'info', 
      memberName: 'server-info',
      description: 'shows you information about the current server',
      guildOnly: true,

    })
  }

  run(message) {

    //Start

    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new discord.MessageEmbed()
      .setTitle(guild.name + " Information!")
      .setColor("RANDOM")
      .setThumbnail(guild.iconURL())
      .addField(`Name`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Highest Role`, `${guild.roles.highest || "No Role!"}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
    
  }
};