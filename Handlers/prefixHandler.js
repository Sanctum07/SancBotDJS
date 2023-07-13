function loadpCommands(client) {

  const fs = require("fs")
  const ascii = require('ascii-table');
  const table = new ascii().setHeading("Commands", "Status");

  const pcommands = []
  const commandFiles = fs.readdirSync(`./Commands/Prefix`).filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`../Commands/Prefix/${file}`);
    client.pcommands.set(command.name, command)
    pcommands.push(command.name, command);
    if (command.aliases && Array.isArray(command.aliases)) {
      command.aliases.forEach(alias => {
        client.commandaliases.set(alias, command.name)
      })
    }
    table.addRow(file, "loaded");
      continue;
  }

  return console.log(table.toString(), "\n Loaded prefix commands");
}

module.exports = { loadpCommands };