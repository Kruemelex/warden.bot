module.exports = {
    name: "invite",
    description: "Get a server invite link",
    format: '',
    args: false,
    permlvl: 0,
    restricted: false,
    execute (message, args, passArray) {
        message.channel.send(`To invite people to the server, please use the following link: https://discord.gg/bqmDxdm`);
    }
}