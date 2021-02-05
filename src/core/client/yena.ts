import { ListenerHandler, CommandHandler, AkairoClient } from 'discord-akairo'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

import { YenaOptions } from 'core/types/yena-options'
import Logger from '../../common/logger'

export default class YenaClient extends AkairoClient {
    public constructor(config: YenaOptions) {
        super(
            {
                ownerID: config.owner,
            },
            {
                disableMentions: 'everyone',
                partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
            }
        )

        this.config = config
        this.Logger = new Logger({ name: 'client' })
        this.db = new PrismaClient()

        this.commandHandler = new CommandHandler(this, {
            directory: join(__dirname, '..', 'commands'),
            prefix: async (message) => {
                const guildSettings = await this.db.guild.findUnique({
                    where: {
                        id: message.guild?.id,
                    },
                })
                return guildSettings?.id ?? this.config.defaultPrefix
            },
            allowMention: true,
            defaultCooldown: 5e3,
        })
        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, '..', 'listeners'),
        })
    }

    private _init(): void {
        this.commandHandler.useListenerHandler(this.listenerHandler)

        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
        })

        this.commandHandler.loadAll()
        this.listenerHandler.loadAll()
    }

    public async start(token: string): Promise<string> {
        this._init()
        return await super.login(token)
    }
}
