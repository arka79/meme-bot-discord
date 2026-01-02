const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const axios = require('axios'); // For fetching memes
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, c => {
    console.log(`🚀 Booted! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    // 1. !meme command
    if (message.content === '!meme') {
        const res = await axios.get('https://meme-api.com/gimme');
        const embed = new EmbedBuilder()
            .setTitle(res.data.title)
            .setImage(res.data.url)
            .setFooter({ text: `Subreddit: r/${res.data.subreddit}` })
            .setColor(0xffcc00);
        
        message.reply({ embeds: [embed] });
    }

    // 2. !user command
    if (message.content === '!user') {
        message.reply(`This command was run by ${message.author.username}, who joined Discord on ${message.author.createdAt.toDateString()}.`);
    }
});

client.login(process.env.BOT_TOKEN);