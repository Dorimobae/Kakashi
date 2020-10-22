const discord = require('discord.js')
const { Command } = require('discord.js-commando')
const db = require('quick.db')

module.exports = class depositCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'deposit',
            aliases: ['dep', 'depo'],
            group: 'economy',
            memberName: 'deposit',
            description: 'deposit your coins from your wallet into your bank',
            args: [
                {
                    key: 'amount',
                    prompt: 'how many coins would you like to deposit?',
                    type: 'integer'
                },
            ]
        })
    }
    run(message, {amount}) {
        let user = message.author;

        let walletmoney = db.fetch(`wallet_${user.id}`)

        
        if(amount > walletmoney){
            return message.channel.send('That\'s more than what you have!')
        }

        db.subtract(`wallet_${user.id}`, amount)
        db.add(`bank_${user.id}`, amount)

        return message.channel.send(`**${amount}** coins deposited`)
    }
}