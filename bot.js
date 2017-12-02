const Discord = require('discord.js');
var client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

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

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

