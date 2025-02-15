import * as assert from 'node:assert'
import { it } from 'node:test'
import { createServer } from '../create-server.ts'

it(`works`, async () => {
	const app = await createServer()
	const response = await app.inject('/api/page-1')

	assert.equal(response.statusCode, 200)
	assert.deepEqual(response.json(), { title: `You don't need SSR` })
})
