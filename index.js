const Discord = require('discord.js');

const tite = new Discord.Client();

const prefix = '-';

var ffmpeg = require('ffmpeg');

const ytdl  = require('ytdl-core');
const streamOptions = {
	seek:0,
	volume:1
};

var check = 0;

tite.once('ready', () =>{
	console.log('henlo');
});

tite.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'tara'){
		check = 1;
		message.channel.send('welcum 2 jabi!');
		if(message.member.voice.channel){
			message.member.voice.channel.join()
			.then(connection => {
				const stream = ytdl('https://www.youtube.com/watch?v=561xYvjMbNk', {filter:'audioonly'});
			});
			} 
		else {
			message.channel.send('ang tanga mo!');
		}
	}

	if (command === 'layas'){
		if (check === 1){
			connection = message.member.voice.channel.leave();
			message.channel.send('paalam :<');
			check = 0;
		} 
		else {
			message.channel.send('saan?');
		}
	}
});

tite.login(process.env.token)