const Discord = require('discord.js');
const config = require('./config.json'); // your Discord bot token
const sengine = require('./sightengine.json'); // image detection api tokens (user and secret token)
/*
    Also you will need to sign up your Sightengine account to make the API work. Currently they
    have 2000 operations per month (500 operations per day) under FREE plan. Go visit sightengine.com
    to sign up in order to use the API.
*/

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async => {
    console.log("I'm ready!");
});

bot.on('message', async message => { // here we goooooooo!!

/*
    Just for the records: I wrote the code in the try and catch brackets because,
    even though the bot was able to get the link from content, it still showed up a TypeError
    which said that, I have URL undefined or unknown. Another thing I also noticed on the last
    minute: it takes a look at every message sent by person for links and, if there no links, it
    will also return with URL being undefined. I'm... idk. What the hell... Oh, well!
*/

    try {
        if (message.author.bot) return;
        var Attachment = message.attachments.array(); // the link in the content
        var imgURL = Attachment[0].url; // the link itself
        var sightengine = require('sightengine')(sengine.api_user,sengine.api_secret);
        sightengine.check(['properties']).set_url(imgURL).then(function(result) {
            console.log(Attachment[0].url); // logs the URL from message content (if there is)
            console.log(result.colors.dominant); // logs the dominant colors (in average from picture, in RGB and HEX values)
            var domRed = result.colors.dominant.r; // variable for dominant red color
            if (domRed > 175) { // if dominant red color is greater than 175, delete the picture
                message.delete();
                message.channel.send("NO RED, YOU COMMIE!!!"); // communism... yay!
            };
        }).catch(function(err) {
            console.log("An error occurred: " + err);
        });
    } catch (err) {
        //console.log("An error occurred: " + err);
        return; // ignores the error completely, doesn't even log it
    };
});

bot.login(config.token)