<template>
  <div id="app">    
    <router-view 
      :products="database"
      :cart="cart"
      />
  </div>
</template>

<script>
import database from '@/assets/database.json'

export default {
  data () {
    return {
      cart: []
    }
  },
  computed: {
    database () {
      return database;
    }
  },
}
</script>