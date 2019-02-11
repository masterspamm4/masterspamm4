const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544247721910075394")
setInterval(function() {
channel.send(`Skillz Skillz Skillz Skillz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);