const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '?hello') {
    	message.reply('Hi!');
  	}
});

client.on('message', message => {
    if (message.content === '?help') {
    	message.reply('Hi!\nWhat is a Raspberry Pi you ask?\nThe Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote the teaching of basic computer science in schools and in developing countries');
  	}
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("general").send(`"${member.user.username}" has joined this server`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
