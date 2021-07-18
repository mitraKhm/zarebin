<template>
  <v-card
    class="cart"
    color="#313249"
    dark
  >
    <p class="title">
      سبد خرید
    </p>
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

<style scoped lang="scss">
.v-application p {
  margin-bottom: 0;
}
.cart{
  border-radius: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  max-height: calc( 100vh - 86px );
  height: calc( 100vh - 86px );
  .title{
    padding-top: 20px;
    margin-right: 30px;
  }
}
</style>
