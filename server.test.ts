import { expect, test } from 'bun:test'
import { server } from './server'

test('GET / returns homepage', async () => {
	const response = await fetch(`${server.url}`)
	expect(response.status).toBe(200)
})
