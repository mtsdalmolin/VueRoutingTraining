<template>
  <div>
    <h1>{{ CurrentProduct.name }}</h1>
    <router-link to="/cart">My Cart</router-link>
    <h2>Price: R$ {{ CurrentProduct.price }}</h2>
    <h2>Discount: {{ CurrentProduct.discount }}%</h2>
    <button @click="addToCart">Buy for {{ (this.CurrentProduct.price - this.Discount).toFixed(2) }}</button>
    <img :src="CurrentProduct.image"/>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array
    },
    cart: {
      type: Array
    }
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
      let item = this.CurrentProduct
      let inArray = false
      let paramId = +this.$route.params.id

      this.cart.map(product => {
        console.log(product.id, item.id)
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