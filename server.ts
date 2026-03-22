import homepage from './index.html'

const server = Bun.serve({
	port: process.env.PORT || 3000,
	hostname: process.env.HOST || '0.0.0.0',
	development: process.env.NODE_ENV !== 'production',
	routes: {
		'/': homepage,
	},
	fetch(req) {
		const url = new URL(req.url)
		const file = Bun.file(`./public${url.pathname}`)
		return file
			.exists()
			.then((exists) =>
				exists
					? new Response(file)
					: new Response('Not Found', { status: 404 }),
			)
	},
})

console.log(`Listening on ${server.url}`)

export { server }
