const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'point',
    aliases: ["pt"],
    permissions: ["ADMINISTRATOR"],
    description: "To give people points to rank up",
    async execute(client, message, args, Discord, profileData){
     if(!args.length) return message.channel.send('You need to mention a player to give points');
     const amount = args[1]
     const target = message.mentions.users.first();
     if(!target) return message.channel.send('That user does not exist');

     if (amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit amount must be a whole number');

     try{
         const targetData = await profileModel.findOne({ userID: target.id});
         if(!targetData) return message.channel.send('This user doesnt exist in the database');

         await profileModel.findOneAndUpdate({
             userID: target.id
         },{
             $inc: {
                 points: amount,
             },
         }
        );

         return message.channel.send('This player has been given their point(s).')
     }catch(err){
        console.log(err)
     }
    },
};