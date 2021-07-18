<template>
  <v-card
    class="other-products-box"
    elevation="0"
    color="#26283b"
  >
    <v-card-text class="other-products-box-title">
      محصولات دیگر
    </v-card-text>
    <v-row>
      <v-col
        v-for="(product,index) in products"
        :key="index"
        md="3"
        sm="6"
        cols="12"
      >
        <product-item :one-product="product" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ProductItem from './ProductItem';
import {Product} from '@/Models/Product';
export default {
  name: 'OtherProducts',
  props:{
    products:{
      type: Product,
      default(){
        return new Product()
      }
    }
  },
  components: {ProductItem}
}
</script>

<style scoped>

</style>
<style>
.other-products-box .theme--light.v-sheet {
  background-color: #26283b;
}
.other-products-box-title{
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
}
.v-card__subtitle, .v-card__text, .v-card__title .other-products-box{
  padding: 0 0 20px;
  color: #ffffff;
}
.theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__subtitle .other-products-box-title{
  color: #ffffff;
}
.theme--dark.v-card > .v-card__text, .theme--dark.v-card > .v-card__subtitle .other-products-box-title{
  color: #ffffff;
}
</style>
