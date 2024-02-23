/*============================= | Dependencias | =========================================*/
const { SlashCommandBuilder} = require('discord.js');
const discord = require('discord.js')
/*============================= | Criação do comando | =========================================*/

module.exports = {
    moderatorOnly: true,
    data: new SlashCommandBuilder()

    .setName("modelo")
    .setDescription("[🔰 MODERAÇÃO 🔰]")
    .setDMPermission(false)

    .addChannelOption(option =>
        option.setName("canal")
            .setDescription("Selecione um canal.")
            .setRequired(false)
            
    ),

async execute(interaction) {

    const {client,  guild, options } = interaction;

    if (
        !interaction.member.permissions.has(discord.PermissionFlagsBits.Administrador)
        
    ) {
        return interaction.reply({
            embeds: [
                new discord.EmbedBuilder()
                    .setDescription(
                        `*Opa!* **${interaction.user},** apenas usuarios com permissão de **BanMembers** podem usar esse comando!`
                    )
            ],
            ephemeral: false
        });
    } else {

    const canal = options.getChannel('canal') || interaction.channel;

    const embed = new discord.EmbedBuilder()
    .setDescription('teste')

    canal.send({embeds: [embed],components: [selecao]}).catch(() => { });
    await interaction.reply({
        content: `A Enviado  veja o canal ${canal}.`,
        ephemeral: true
    }).catch(() => { });

    interaction.deleteReply();


    }},
};