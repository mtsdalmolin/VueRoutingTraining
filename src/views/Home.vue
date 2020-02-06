<template>
  <div>
    <h1>List of Products</h1>
    <router-link to="/cart">My Cart</router-link>
    <div v-for="(product, index) in products" :key="index">
      <Product :product="product"/>
    </div>
    <router-link to="/contact">Contact Us!</router-link>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  props: {
    products: {
      type: Array
    }
  },
  components: {
    Product
  }
}
</script>