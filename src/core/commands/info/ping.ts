import { Command } from 'discord-akairo'
import { Message, Permissions } from 'discord.js'

export default class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: 'Checks response time of the bot',
            clientPermissions: Permissions.FLAGS.SEND_MESSAGES,
            userPermissions: Permissions.FLAGS.SEND_MESSAGES,
            channel: 'guild',
        })
    }

    public async exec(message: Message): Promise<Message | undefined> {
        return await message.channel.send(`Pong! \`${this.client.ws.ping}ms\``)
    }
}
