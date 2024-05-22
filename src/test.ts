function add(a: number, b: number): number {
  return a + b
}

function addN(a: number) {
  return function (b: number) {
    return add(a, b)
  }
}

export const addOne = addN(1)

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
  })
  describe('addOne', () => {
    it('adds one to a number', () => {
      expect(addOne(10)).toBe(11)
    })
  })
}
