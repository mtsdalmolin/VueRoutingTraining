<template>
  <div>
    <router-link to="/cart">My Cart</router-link>
    <Product :product="CurrentProduct"/>
    <button @click="addToCart">Buy for {{ (this.CurrentProduct.price - this.Discount).toFixed(2) }}</button>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  props: {
    products: {
      type: Array
    },
    cart: {
      type: Array
    }
  },
  components: {
    Product
  },
  computed: {
    CurrentProduct () {
      return this.products.find(item => item.id === +this.$route.params.id)
    },
    Discount () {
      return this.CurrentProduct.price * (parseInt(this.CurrentProduct.discount) / 100)
    }
  },
  methods: {
    addToCart () {
      let inArray = false
      let paramId = +this.$route.params.id

      this.cart.map(product => {
        if (product.id === paramId) {
          product.quant++
          inArray = !inArray
        }
      })

      if (!inArray)
        this.cart.push({
          ...this.CurrentProduct,
          quant: 1
        })
    }
  }
}
</script>