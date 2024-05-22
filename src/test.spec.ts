import { describe, expect, it } from 'vitest'
import { addOne } from './test'

describe('addOne', () => {
  it('addOne(2) should be 3', () => {
    expect(addOne(2)).toBe(3)
  })
})
