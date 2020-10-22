const discord = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class simprateCommand extends Command {
    constructor(client){
        super(client, {
            name: 'simprate',
            aliases: ['howsimp', 'simpr8', 'simp'],
            group: 'rates',
            memberName: 'simprate',
            description: 'shows you how much of a simp you are!',
            
            guildOnly: true,
            
        })
    }
    run(message) {
        let result = Math.floor(Math.random() * 100)
        let user = message.author
        let embed = new discord.MessageEmbed()
        .setTitle(`Simp machine 2000`)
        .setDescription(`${user.username}'s simp rate is ${result}%`)

        message.channel.send(embed)


    }
}