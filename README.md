# Red Color Detection Bot

A bot that detects dominant red color from sent images

## How it works?

The Discord bot first detects an URL from the message attachments (if there is no attachments, it will return with TypeError where it says that URL is undefined/unknown), takes the link, sends it to Sightengine API, it calculates the average dominant colors in RGB and HEX, the code will take the dominant red value from the result, and if the red color is greater than 175 (as I've set in this code, you can adjust this from 0-255 or, you can use HEX value instead), then deletes the message with image and replies "NO RED, YOU COMMIE!!!".

## What you will need?

You will need:
- Node.js engine with NPM obviously (Download link [here!](https://nodejs.org/en/download/))
- Discord (`npm install discord.js --save`)
- Your Discord bot with secret token to make your bot alive
- Sightengine (`npm install sightengine --save` + make an account on their [homepage](https://sightengine.com/))
- Your Sightengine's account API credentials
- Put all your credentials inside the JSON files (`config.json` and `sightengine.json`)

If you got all these sorted out, you're good to go! :)

## Anything else?

...No. Have fun!

also... Seth is gay!