const discord = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class gayrateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gayrate',
            aliases: ['howgay', 'amigay'],
            group: 'rates',
            memberName: 'gayrate',
            description: 'check how gay you are!',
            guildOnly: true,

        })
    }
    run(message){
        let result = Math.floor(Math.random() * 100)

        let user = message.author;


        let embed = new discord.MessageEmbed()
        .setTitle(`how gay is ${user.username}?`)
        .setDescription(`you are ${result}% gay 🏳️‍🌈`)
        .setColor('RANDOM')

        message.channel.send(embed)
    }
}