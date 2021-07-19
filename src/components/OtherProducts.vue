<template>
  <v-card
    class="other-products-box"
    elevation="0"
    color="#26283b"
  >
    <v-card-text class="other-products-box-title">
      <div class="product-line" />
      <div class="product-series-title">
        {{ title }}
      </div>
    </v-card-text>
    <v-row>
      <v-col
        v-for="(product,index) in products.list"
        :key="index"
        md="3"
        sm="6"
        cols="12"
      >
        <product-item
          :product="product"
          @addToCart="addToCart(product)"
          @showInfo="showProductInfo(product)"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ProductItem from './ProductItem';
import {ProductList} from '@/Models/Product';
export default {
  name: 'OtherProducts',
  props:{
    products:{
      type: ProductList,
      default(){
        return new ProductList()
      }
    },
    title:{
      type: String,
      default() {
        return 'محصولات دیگر';
      }
    }
  },
  components: {ProductItem},
  methods:{
    addToCart(product){
      this.$emit('addToCart', product)
    },
    showProductInfo(product){
      this.$emit('showProductInfo', product)
    }
  }
}
</script>

<style scoped>

</style>
<style>
.other-products-box .theme--light.v-sheet {
  background-color: #26283b;

}
.other-products-box{
  margin-bottom: 60px;
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
  display: flex;
  align-items: center;
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
.product-line{
  color: #f7bb41;
  width: 10px;
  border-bottom: solid 4px #f7bb41;
  border-radius: 7px;
  height: 0;
  margin-left: 10px;
  margin-bottom: -1px;
}
</style>
