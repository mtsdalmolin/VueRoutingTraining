<template>
  <div>
    <h1>My Cart</h1>
    <h1>Cart price: R$ {{ cartPrice }}</h1>
    <div v-for="(product, index) in cart" :key="index">
      <h4>{{ product.name }}</h4>
      <img :src="product.image">
      <div class="info">
        <h2>Price: {{ product.price }}</h2>
        <h2>Quantity: {{ product.quant }}</h2>
        <h2>Total: R$ {{ product.price * product.quant }}</h2>
      </div>
      <button @click="removeItem(index)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array
    }
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
img {
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