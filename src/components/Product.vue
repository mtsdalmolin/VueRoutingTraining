<template>
  <div>
    <h1>{{ product.name }}</h1>
    <router-link :to="`/products/${product.id}`">
      <img :src="product.image"/>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  }
}
</script>