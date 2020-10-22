const discord = require('discord.js')
const { Command } = require('discord.js-commando')
const db = require('quick.db')

module.exports = class addCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addcoins',
            aliases: ['ac'],
            group: 'economy',
            memberName: 'addcoins',
            description: 'adds coins to a user',
            args: [
                {
                    key: 'amount',
                    prompt: 'how much would you like to add?',
                    type: 'integer'
                }
            ],
            ownerOnly: true,
        })
    }
    run(message, {amount}) {
        let user = message.author;
               
        db.add(`wallet_${user.id}`, amount)

        return message.reply(`successfully added ${amount} to your balance!`)
    }
}