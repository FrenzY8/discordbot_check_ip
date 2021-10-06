const { MessageCollector } = require("discord.js-collector");

const { Client } = require("discord.js");
const client = new Client();
client.on("ready", () => {
    console.log("ready");
});

client.on("message", async (message) => {
    if (message.content.startsWith('>ipcheckweb')) {
        const botMessage = await message.channel.send("Send Me A Websites with Domain (org, com, me, ga, ml) or whatever");
        MessageCollector.question({
            botMessage,
            user: message.author.id,
            onMessage: async (botMessage, message) => { // Every message sent by user will trigger this function.
                // Import file
const dns = require('dns');
// dns.lookup() function searches
// for user IP address and family
// if there is no error
dns.lookup(message.content, 
(err, addresses, family, hostname) => {
    // Print the address found of user
    console.log('addresses:', addresses);
    // Print the family found of user  
    console.log('family:', family);
    message.channel.send(`${addresses} + ${family}`)
    console.log(hostname)
});
            }
        }); 
    }
});
// Coded by FrenzySG
// Websites Ip Tracker with :
// DNS, DISCORDJS COLLECTOR

client.login('your_tokem');
