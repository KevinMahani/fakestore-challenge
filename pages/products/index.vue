<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">محصولات</h1>
    <div v-if="error" class="text-red-500">خطا در دریافت محصولات</div>
    <div v-else-if="!products">در حال بارگذاری...</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="block bg-white rounded-xl shadow hover:shadow-lg transition p-4"
      >
        <img :src="product.image" alt="" class="h-40 mx-auto object-contain mb-3" />
        <h2 class="font-semibold text-lg line-clamp-1">{{ product.title }}</h2>
        <p class="text-gray-600 text-sm line-clamp-2 mb-2">{{ product.description }}</p>
        <p class="font-bold text-blue-600">${{ product.price }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: products, error } = await useProducts();
</script>
