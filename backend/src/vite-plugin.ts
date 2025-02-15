import path from 'node:path'
import { fastifyPlugin } from 'fastify-plugin'
import type { Env } from './env-plugin.ts'

export const vitePlugin = fastifyPlugin(async (app) => {
	const env = app.getEnvs<Env>()

	if (env.NODE_ENV === 'production') {
		const root = path.resolve(import.meta.dirname, '../dist')

		await app.register(import('@fastify/static'), {
			prefix: '/',
			root,
		})
	}
})

export default vitePlugin
