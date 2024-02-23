const { EmbedBuilder, CommandInteraction } = require("discord.js");
const ID = require('../../Snippets/ID.js')

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    try {
      const {
        customId,
        values,
        fields,
        member,
        user,
        guild,
        commandName,
        channel,
        guildId,
        message,
      } = interaction;

      if (interaction.isChatInputCommand()) {
        const command = client.commands.get(commandName);

        if (!command) {
          return interaction.reply({
            content: "Comando desatualizado",
            ephemeral: true,
          });
        }

       
        const channel = client.channels.cache.get(ID.LogsCommands.Channel)

        if (channel) {
          const data = `<t:${Math.floor(Date.now() / 1000)}:D> <t:${Math.floor(Date.now() / 1000)}:R>`;
          const msg = `Comando: \`${commandName}\` \nExecutor: ${user} (\`${user.globalName}\`) \nCanal: ${interaction.channel || 'canal desconhecido'} \nData: ${data}`
          await channel.send({ embeds: [new EmbedBuilder().setTitle('LOGS COMANDOS').setDescription(msg)]
            
          });
        } else {
          // Registra no console se não houver um canal configurado
          console.log(`LOGS COMANDOS \nComando: ${commandName} \nUser: ${user.tag} \nCanal: ${channel.name || 'canal desconhecido'} \nData: ${new Date().toLocaleString()}`);
        }
        
        command.execute(interaction, client);
      }
    } catch (error) {
      console.error("Erro na execução do comando:", error);
      const errEmbed = new EmbedBuilder()
      .setColor("Red")
      .setDescription("Ocorreu um erro ao processar o comando. Por favor, tente novamente mais tarde.");
      interaction.reply({ embeds: [errEmbed], ephemeral: true });
    }
  },
};
