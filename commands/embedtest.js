module.exports = {
    name: 'embedtest',
    description: "To test the embed function",
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#006aa7')
       .setTitle('Group Link')
       .setURL ('https://www.roblox.com/groups/10879207')
       .setDescription ('This is the group link.')
       .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Great_coat_of_arms_of_Sweden.svg/640px-Great_coat_of_arms_of_Sweden.svg.png')
       .setFooter('Make sure to join and verify in the discord server.');
       message.channel.send({embeds: [newEmbed]});
    }

}