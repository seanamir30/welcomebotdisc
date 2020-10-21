const Discord = require('discord.js');

const tite = new Discord.Client();

const prefix = '-'

tite.once('ready', () =>{
	console.log('henlo');
});

tite.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'sali'){
		const channel = tite.channels.get("mychannelid");
		if (!channel) return console.error("The channel does not exist!");
		channel.join().then(connection => {
			console.log("connected");
		}).catch(e => {
			console.error(e);
		});
	};
});

tite.login('NzY1ODkwMTY1ODAwODI4OTM4.X4bYzQ.FX2-qM06_8hqrDN7D5To4fVjTWI')