module.exports = {
    name: 'clear',
    permissions:["ADMINISTRATOR"],
    description: "To clear messages",
    async execute(client, message, args, Discord){

        if(message.member.roles.cache.has('983458854224412782')){
            if(!args[0]) return message.reply("Please enter the amount of message that you want to clear.");
            if(isNaN(args[0])) return message.reply("Please enter a real number.");

            if(args[0] > 100) return message.reply("You cannot delete more than 100 messages.");
            if(args[0] < 1) return message.reply("You must delete at least one message.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);

            });
        } else {
        message.channel.send('Not allowed to clear messages');
     }
    }
}
