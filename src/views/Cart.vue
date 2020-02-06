<template>
  <div>
    <h1>My Cart</h1>
    <h1>Cart price: R$ {{ cartPrice }}</h1>
    <div v-for="(product, index) in cart" :key="index">
      <div class="product-div">
        <Product :product="product"/>
      </div>
      <div class="info">
        <h2>Quantity: {{ product.quant }}</h2>
        <h2>Total: R$ {{ product.price * product.quant }}</h2>
      </div>
      <button @click="removeItem(index)">Remove</button>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  props: {
    cart: {
      type: Array
    }
  },
  components: {
    Product
  },
  computed: {
    cartPrice () {
      let price = 0.0
      this.cart.map(product => {
        price += product.price * product.quant
      })
      return price.toFixed(2)
    }
  },
  methods: {
    removeItem (index) {
      this.cart.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.product-div {
  width: 150px;
  height: auto;
}

.info {
  display: flex;
}

.info h2 {
  margin: 10px 25px;
}
</style>