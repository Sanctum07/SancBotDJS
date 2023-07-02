const tolkien = process.env['tokk']
const keepAlive = require("./server");
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/slashHandler");
//const { loadpCommands } = require("./Handlers/prefixHandler");

const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require("@distube/soundcloud");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});



client.distube = new DisTube(client, {
  emitNewSongOnly: true,
  leaveOnFinish: true,
  emitAddSongWhenCreatingQueue: false,
  plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
});
client.commands = new Collection();

//prefix handler (directory error that i couldnt fix while using Handlers folder)
client.pcommands = new Collection();
client.commandaliases = new Collection();

const { readdirSync } = require("fs")
client.pcommands = new Collection()
client.commandaliases = new Collection()
const pcommands = []
  readdirSync('./Commands/Prefix').forEach(async file => {
    const command = await require(`./Commands/Prefix/${file}`);
    if (command) {
      client.pcommands.set(command.name, command)
      pcommands.push(command.name, command);
      if (command.aliases && Array.isArray(command.aliases)) {
        command.aliases.forEach(alias => {
          client.commandaliases.set(alias, command.name)
        })
      }
    }
  })

module.exports = client;

keepAlive();

client.login(tolkien).then(() => {
  loadEvents(client);
  loadCommands(client);
 // loadpCommands(client);
});
