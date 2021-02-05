import YenaClient from './core/client/yena'

// eslint-disable-next-line no-void
void (async () => {
    if (process.env.NODE_ENV === undefined || process.env.NODE_ENV !== 'prod') {
        ;(await import('dotenv')).config()
    }

    if (process.env.BOT_TOKEN === undefined) throw new Error('Must include a token!')
    if (process.env.DEFAULT_PREFIX === undefined) throw new Error('Must include a default prefix!')

    const client: YenaClient = new YenaClient({
        defaultPrefix: process.env.DEFAULT_PREFIX,
        owner: process.env.BOT_OWNER,
    })

    try {
        await client.start(process.env.BOT_TOKEN)
    } catch (error) {
        throw new Error(`Could not start bot! ${error.message as string}`)
    }
})()
