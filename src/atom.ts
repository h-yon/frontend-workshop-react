import { atom, createStore } from 'jotai'

const a = atom(0)
const b = atom('hello')

const successor = atom((get) => get(a) + 1)

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe('atom', () => {
    it('has initial value', () => {
      const store = createStore()
      expect(store.get(a)).toBe(0)
      expect(store.get(b)).toBe('hello')
    })

    it('value change: a', () => {
      const store = createStore()
      expect(store.get(a)).toBe(0)
      store.set(a, 1)
      expect(store.get(a)).toBe(1)
    })

    it('stores are independent', () => {
      const store1 = createStore()
      const store2 = createStore()
      expect(store1.get(a)).toBe(0)
      store1.set(a, 1)
      expect(store1.get(a)).toBe(1)
      expect(store2.get(a)).toBe(0)
    })

    it('value change: b', () => {
      const store = createStore()
      expect(store.get(b)).toBe('hello')
      store.set(b, (current) => current + ' world')
      expect(store.get(b)).toBe('hello world')
    })

    it('successor', () => {
      const store = createStore()
      expect(store.get(successor)).toBe(1)
      store.set(a, 2)
      expect(store.get(successor)).toBe(3)
    })
  })
}
