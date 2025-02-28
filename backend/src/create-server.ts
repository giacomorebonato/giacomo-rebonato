import { setTimeout } from 'node:timers/promises'
import { fastify } from 'fastify'
import type { Page1Response } from 'shared/types'

export async function createServer() {
	const app = fastify({
		logger: true,
	})

	await app
		.register(import('./env-plugin.ts'))
		.register(import('./vite-plugin.ts'))

	app.get<{
		Reply: Page1Response
	}>('/api/page-1', (request, reply) => {
		return setTimeout(1_000).then(() => {
			reply.send({
				title: `You don't need SSR`,
			})
		})
	})

	return app
}
