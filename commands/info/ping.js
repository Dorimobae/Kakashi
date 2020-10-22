const discord = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class pingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pong',
            aliases: ['p'],
            group: 'info',
            memberName: 'ping',
            description: 'shows the bot\'s ping',
            guildOnly: true,
        })
    }

    run(message) {
        message.channel.send("Calculating ping...").then(msg => {
            let pingtime = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`${pingtime}ms`);
        });
    }
}