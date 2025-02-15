import * as assert from 'node:assert'
import { it } from 'node:test'
import { test } from '../helpers.ts'

it(`works`, () => {
	assert.equal(test(), 'hello')
})
