<template>
  <v-card
    class="product-item-box"
    elevation="0"
  >
    <div @click="showInfo">
      <v-img
        max-width="200"
        :src="product.photo"
        class="product-item-box-image"
      />
      <v-card-text class="product-item-box-title">
        {{ product.title }}
      </v-card-text>
    </div>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="addToCart"
      >
        <i class="fi-rr-shopping-cart-add" />
      </v-btn>
    </v-card-actions>
    <div class="product-item-box-prices">
      <v-chip
        color="#ef5350"
        class="product-item-box-prices-sheet"
      >
        30%
      </v-chip>
      <v-card-text>
        {{ product.price.discount }}
        {{ product.price.final }}
      </v-card-text>
    </div>
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
      this.$emit('addToCart', this.product)
    },
    showInfo(){
      this.$emit('showInfo', this.product)
    }
  },
  created() {
    console.log(this.product)
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
.product-item-box-image{
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0 0 0;
}
.product-item-box-title{
  padding-right: 10px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
}
.product-item-box-prices{
  display: flex;
  align-items: center;
}
.product-item-box-prices-sheet{
  width: 60px;
  height: 44px;
  position: relative;
  left: 87px;
  top: 1px;
}
.v-chip.v-size--default {
  border-radius: 25px 0;
  font-size: 14px;
  height: 44px;
}
</style>
