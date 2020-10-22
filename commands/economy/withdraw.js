const discord = require('discord.js')
const { Command } = require('discord.js-commando')
const db = require('quick.db')

module.exports = class withdrawCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'withdraw',
            aliases: ['with'],
            group: 'economy',
            memberName: 'withdraw',
            description: 'withdraw an amount from your bank and add it to your wallet',
            args: [
                {
                    key: 'amount',
                    prompt: 'how much would you like to withdraw?',
                    type: 'integer'
                },

            ]
        })
    }
    run(message, {amount}) {
        let user = message.author;
        let bankmoney = db.fetch(`bank_${user.id}`)

        if(amount == 'all'){
            amount = bankmoney
        }

        if(amount > bankmoney){
            return message.channel.send('you do not have that many coins!')
        }

        db.subtract(`bank_${user.id}`, amount)
        db.add(`wallet_${user.id}`, amount)

        return message.channel.send(`**${amount}** coins withdrawn`)
    }
}