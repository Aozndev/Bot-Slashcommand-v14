function loadCommands(client) {
  const ascii = require("ascii-table");
  const fs = require("fs");
  const table = new ascii().setHeading("File Name", "Status");
  require("colors");

  let commandsArray = [];

  const commandsFolder = fs.readdirSync("./SlashCommands");
  for (const folder of commandsFolder) {
    const commandFiles = fs
      .readdirSync(`./SlashCommands/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const commandFile = require(`../SlashCommands/${folder}/${file}`);

      const properties = { folder, ...commandFile };
      client.commands.set(commandFile.data.name, properties);

      commandsArray.push(commandFile.data.toJSON());

      table.addRow(file, "Loaded");
      continue;
    }
  }

  client.application.commands.set(commandsArray);

  return console.log(table.toString().yellow, "\n[+]".green + " Comandos iniciados");
}

module.exports = { loadCommands };
