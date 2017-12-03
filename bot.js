const Discord = require('discord.js');
var client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!hello') {
    	message.reply('Hi!');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hi!\nWhat is a Raspberry Pi you ask?\nThe Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote the teaching of basic computer science in schools and in developing countries');
  	}
});

client.on('message', message => {
    if (message.content === '!code') {
    	message.reply('The code for me can be found here: https://github.com/JoshuaLowe1002/raspberrypidiscordbot/');
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

const swearWords = ["brexit", "trump"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Oh no you said a bad word!!!");
  // Or just do message.delete();
}

client.login(process.env.BOT_TOKEN);
