<template>
  <div class="p-6">
    <div v-if="error" class="text-red-500">خطا در دریافت اطلاعات محصول</div>
    <div v-else-if="!product">در حال بارگذاری...</div>
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>
      <img :src="product.image" alt="" class="h-60 object-contain mx-auto" />
      <p class="mt-4 text-gray-700">{{ product.description }}</p>
      <p class="mt-2 font-bold text-lg">${{ product.price }}</p>

      <button @click="addToCart(product)" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
  افزودن به سبد خرید
      </button>

    </div>
  </div>
</template>




<script setup>
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'


const cart = useCartStore()
cart.addToCart({ id: 1, title: 'Test Product', price: 10 })
console.log(cart.items)
const addToCart = (product) => {
  cart.addToCart(product)
}
const route = useRoute()
const id = route.params.id
const { data: product, error } = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>

