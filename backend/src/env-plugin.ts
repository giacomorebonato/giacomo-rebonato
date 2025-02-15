import { fastifyPlugin } from 'fastify-plugin'

export const envPlugin = fastifyPlugin((app, _options, done) => {
	const envSchema = {
		type: 'object',
		required: ['NODE_ENV', 'PORT'],
		properties: {
			HOST: {
				type: 'string',
			},
			NODE_ENV: {
				type: 'string',
			},
			PORT: {
				type: 'string',
			},
		},
	}
	app.register(import('@fastify/env'), {
		schema: envSchema,
	})

	done()
})

export type Env = {
	HOST: string
	NODE_ENV: 'test' | 'development' | 'production'
	PORT: string
}

export default envPlugin
