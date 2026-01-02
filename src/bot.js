
const Discord = require('discord.js'); 
const axios = require('axios');        
require('dotenv').config();          


const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds, 
        Discord.GatewayIntentBits.GuildMessages, 
        Discord.GatewayIntentBits.MessageContent
    ]
});


client.once('ready', () => {
    console.log("The bot is now online! 🚀");
});


client.on('messageCreate', async (message) => {
    
    
    if (message.author.bot === true) {
        return;
    }

    
    if (message.content === "!meme") {
      
        const response = await axios.get('https://meme-api.com/gimme');
        const memeData = response.data;

        
        const memeEmbed = new Discord.EmbedBuilder()
            .setTitle(memeData.title)
            .setImage(memeData.url)
            .setColor("Yellow")
            .setFooter({ text: "From subreddit: " + memeData.subreddit });

        
        message.reply({ embeds: [memeEmbed] });
    }


    else if (message.content === "!user") {
        const name = message.author.username;
        const date = message.author.createdAt.toDateString();
        
        message.reply("You are " + name + " and you created your account on " + date);
    }
});


const myToken = process.env.BOT_TOKEN;
client.login(myToken);