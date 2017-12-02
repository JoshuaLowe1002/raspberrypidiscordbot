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

const swearWords = ["brexit"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Oh no you said a bad word!!!");
  // Or just do message.delete();
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
