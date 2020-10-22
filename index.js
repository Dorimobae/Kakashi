const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: 'ki',
	owner: '559420338052661258',
	invite: 'https://discord.gg/gPnvPDE',
});


client.registry
	.registerDefaultTypes()
	.registerGroups([
        ['fun', 'Fun'],
		['economy', 'Economy'],
		['rates', 'Rates'],
		['info', 'Info'],
		['image', 'Images'],
		['owner', 'Owner'],
        ['config', 'Config']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login('NzY3NzQzOTc3NDExMDUxNTUw.X42XTA.qC1NIDTtukmWJn9LwPN-fbmdm9Y');
