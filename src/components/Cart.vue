<template>
  <v-card class="cart">
    سبد خرید
    <cart-item
      v-for="item in 5"
      :key="item"
    />
  </v-card>
</template>

<script>
import CartItem from './CartItem';
export default {
  name: 'Cart',
  components: {CartItem}
}
</script>

<style scoped>
.cart {
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  max-height: calc( 100vh - 86px );
}
</style>
