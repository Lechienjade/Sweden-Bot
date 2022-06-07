module.exports = {
    name: 'balance',
    aliases: ["bal"],
    description: "Checks the user's balance",
    execute(client, message, args, Discord, profileData){
        message.channel.send(`Your point balance is ${profileData.points}`);
    }
}