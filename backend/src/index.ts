import { createServer } from './create-server.ts'
import type { Env } from './env-plugin.ts'

const app = await createServer()
const env = app.getEnvs<Env>()
const host = await app.listen({ port: +env.PORT, host: env.HOST })

console.log(`Listening on ${host}`)
