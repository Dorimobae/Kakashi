const discord = require('discord.js')
const { Command } = require('discord.js-commando')
const db = require('quick.db')

module.exports = class balanceCommand extends Command  {
    constructor(client) {
        super(client, {
            name: 'balance',
            aliases: ['bal'],
            group: 'economy',
            memberName: 'balance',
            description: 'Check your balance',
        })
    }
    run(message){
        let user = message.mentions.users.first() || message.author; 

        let wallet = db.fetch(`wallet_${user.id}`)
        let bank = db.fetch(`bank_${user.id}`)

        if(wallet === null) wallet = 0
        if(bank === null) bank = 0

        var x = wallet
        var y = bank

        let total = x + y

        let embed = new discord.MessageEmbed()
        .setTitle(`${user.username}'s balance`)
        .setDescription(`**Wallet**: ${wallet} \n **bank**: ${bank} \n **Total**: ${total}`)
        .setColor('RANDOM')
        
        message.channel.send(embed)
    }
}