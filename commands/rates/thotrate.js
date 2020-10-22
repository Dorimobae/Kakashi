const discord = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class thotrateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'thotrate',
            aliases: ['thotr8', 'howthot'],
            group: 'rates',
            memberName: 'thotrate',
            description: 'shows you how much of a thot you are',

        })
    }
    run(message) {
        let result = Math.floor(Math.random() * 100)

        let user = message.author;

        let embed = new discord.MessageEmbed()
        .setTitle(`thot machine v2`)
        .setDescription(`${user.username} is ${result}% thotty 😏`)

        return message.channel.send('emned')
    }
}