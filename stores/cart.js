import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
})
