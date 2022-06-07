const Discord = require('discord.js');
require('dotenv').config();
const client =  new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });
const mongoose = require('mongoose');
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler=>{
    require(`./handlers/${handler}`)(client, Discord);
});

mongoose.connect(process.env.MONGODB_SRV, {
}).then(()=>{
    console.log('Connected to the database');
}).catch((err) =>{
    console.log(err);
})

client.on('guildMemberAdd', guildMember =>{
    let armyrole = guildMember.guild.roles.cache.find(role => role.name === 'Sweden Armén');

    guildMember.roles.add(armyrole);

    let unverifiedrole = guildMember.guild.roles.cache.find(role => role.name === 'Unverified');

    guildMember.roles.add(unverifiedrole);

    let enlistmentrole = guildMember.guild.roles.cache.find(role => role.name === 'Awaiting Enlistment');

    guildMember.roles.add(enlistmentrole);

    let Recruitrole = guildMember.guild.roles.cache.find(role => role.name === 'Rekryt');

    guildMember.roles.add(Recruitrole);

    guildMember.guild.channels.cache.get('977310646985179140').send(`Hallå! <@${guildMember.user.id}>, welcome to Kingdom of Sweden.`)
});

client.login(process.env.DISCORD_TOKEN);