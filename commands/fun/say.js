const discord = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class sayCommand extends Command {
    constructor(client){
        super(client, {
            name: 'say',
            aliases: ['parrot', 'repeat'],
            group: 'fun',
            memberName: 'say',
            description: 'make the bot repeat whatever you want!',
            args: [
                {
                    key: 'text',
                    prompt: 'what do you want the bot to say?',
                    type: 'string'
                }
            ],
            guildOnly: true
        })
    }
    run(message, {text}) {
        return message.channel.send(text)
    }
}