const Discord = require('discord.js');


const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('Villager is online!');
});

ytdl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
}   

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === "henry") {
        message.channel.send('ako si henry');
        var voiceChannel = message.member.voice.channel;
        voiceChannel.join()
        .then(connection =>{
        	commandcheck = 0;
        	eto = 1;
            client.on('message', message =>{
            if(!message.content.startsWith(prefix) || message.author.bot) return;
        
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            if(command === 'hello'){
                const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
            }
            else if(command === 'hi'){
                const dispatcher = connection.play(require("path").join(__dirname, './hehe.mp3'));
            }
            else if(command === 'gago'){
                const dispatcher = connection.play(require("path").join(__dirname, './huh.mp3'));
            }
            });	
        client.on("voiceStateUpdate", (oldMember, newMember)=> { 
  let oldVoice = oldMember.voiceChannelID; 
  let newVoice = newMember.voiceChannelID; 
  if (oldVoice != newVoice) {
    if (oldVoice == null) {
      console.log("User joined!");
    } else if (newVoice == null) {
      console.log("User left!");
    } else {
      console.log("User switched channels!");
    }
  }
});
        }).catch(err => console.log(err));
    }   
    else if (command === "bye") {
        var voiceChannel = message.member.voice.channel;

        voiceChannel.leave();
            }      
});

client.login(process.env.token);
