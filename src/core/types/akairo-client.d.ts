import { PrismaClient } from '@prisma/client'
import Logger from 'common/logger'
import { YenaOptions } from './yena-options'

declare module 'discord-akairo' {
    interface AkairoClient {
        config: YenaOptions
        db: PrismaClient
        commandHandler: CommandHandler
        listenerHandler: ListenerHandler
        inhibitorHandler: InhibitorHandler
        Logger: Logger
    }
}
