<template>
  <v-card
    class="product-item-box"
    elevation="0"
  >
    <v-img
      max-width="200"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      class="product-item-box-image"
    />
    <v-card-text>
      آیتم محصول
    </v-card-text>
    <v-card-text>
      {{ product.title }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="addToCart"
      >
        <i class="fi-rr-shopping-cart-add" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {Product} from '@/Models/Product';

export default {
  name: 'ProductItem',
  props:{
    product:{
      type: Product,
      default(){
        return new Product()
      }
    }
  },
  methods:{
    addToCart(){
      this.$emit('chosenProduct', this.product)
    }
  }
}
</script>

<style scoped>
.v-sheet.v-card .product-item-box{
  border-radius: 25px;
  background-color: #313249;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
