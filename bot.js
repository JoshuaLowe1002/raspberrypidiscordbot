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
    if (message.content === '!code') {
    	message.reply('The code for me can be found here: https://github.com/JoshuaLowe1002/raspberrypidiscordbot/');
  	}
});


// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'What is a raspberry pi?') {
    // Send the user's avatar URL
    message.reply('Hi!\nWhat is a Raspberry Pi you ask?\nThe Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote the teaching of basic computer science in schools and in developing countries');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'Can you reccommend any other discord channels?') {
    // Send the user's avatar URL
    message.reply('Yes!\nThe Pimoroni one is a great channel to join: https://discord.gg/gxhmNA3\n The Gadgetoid one is also very cool, join here: https://discord.gg/ykCpYQn\n And last but not least, the Pi Wars Robot Discord: https://discord.gg/2hvjeTp');
  }
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Here are the commands you can use:\n```!ping - I will reply Pong\n!code - I will give you the link to my source code\nWhat is a raspberry pi? - I will tell you\nCan you reccommend any other discord channels? - I will give you links``');
  	}
});


client.login(process.env.BOT_TOKEN);
