import colors from './colors'

export interface LoggerOptions {
    name?: string
}

export default class Logger {
    private readonly name?: string
    public constructor(options?: LoggerOptions) {
        this.name = options?.name
    }

    // [Date] [MemUsed][Name] [Type] <value>

    private base(type: string, value: string, color: string): void {
        const USED_MEM: number = process.memoryUsage().heapUsed / 1024 / 1024

        let out = `[${new Date().toLocaleTimeString()}|${new Date().toLocaleDateString()}]${color}${colors.DIM}`.trim()

        out += `[${Math.round(USED_MEM * 100) / 100} MB]${this.name !== undefined ? `[${this.name}]` : ''}[${type}]:${
            colors.BRIGHT
        }`.trim()

        return console.log(out, value, colors.RESET)
    }

    public log(value: string): void {
        return this.base('INFO', value, colors.GREEN)
    }

    public warn(value: string): void {
        return this.base('WARN', value, colors.YELLOW)
    }

    public error(value: string | Error): void {
        return this.base('ERR', value instanceof Error ? value.message : value, colors.RED)
    }
}
