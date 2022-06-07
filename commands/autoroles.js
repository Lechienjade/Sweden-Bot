module.exports = {
    name: 'autroles',
    description: "To give people roles when they first join",
    execute(message, args, Discord){

    
    let armyrole = guildMember.guild.roles.cache.find(role => role.name === 'Sweden Armén');

    guildMember.roles.add(armyrole);

    let unverifiedrole = guildMember.guild.roles.cache.find(role => role.name === 'Unverified');

    guildMember.roles.add(unverifiedrole);

    let enlistmentrole = guildMember.guild.roles.cache.find(role => role.name === 'Awaiting Enlistment');

    guildMember.roles.add(enlistmentrole);

    let Recruitrole = guildMember.guild.roles.cache.find(role => role.name === 'Rekryt');

    guildMember.roles.add(Recruitrole);

    guildMember.guild.channels.cache.get('977310646985179140').send(`Hallå! <@${guildMember.user.id}>, welcome to Kingdom of Sweden.`);
       
    }
}