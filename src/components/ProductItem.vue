<template>
  <v-card
    class="product-item-box"
    elevation="0"
  >
    <div @click="showInfo">
      <img
        :src="product.photo"
        class="product-item-box-image"
        alt="img1"
      >
      <v-card-text class="product-item-box-title">
        {{ product.title }}
      </v-card-text>
    </div>
    <div class="product-item-box-prices">
      <div
        id="discount"
        class="box-item discount"
      >
        <span class="discount-span">%{{ Math.round(((product.price.base-product.price.final) /(product.price.base))*100) }} </span>
      </div>

      <v-card-text>
        <v-card-actions class="product-item-box-btn">
          <v-btn
            text
            icon
            @click="addToCart"
          >
            <v-icon>
              mdi-cart-plus
            </v-icon>
            <!--            <i class="fi-rr-shopping-cart-add" />-->
          </v-btn>
        </v-card-actions>
        <div class="price-info">
          <div class="main-price">
            {{ product.price.toman('base' , false) }}
            <!--          {{ product.price.toman(base) }}-->
          </div>
          <div class="final-price">
            {{ product.price.toman('final' , false) }}
          </div>
          <div class="toman">
            تومان
          </div>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
import {Product} from '@/Models/Product';
// import Price from '@/Models/Price';

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
  padding: 10px;
  width: 100%;
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
  padding-bottom: 25px;
}
.product-item-box-prices{
  display: flex;
  align-items: center;
  padding-bottom: 11px;
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
.product-item-box-btn{
  position: absolute;
  bottom: -3px;
  right: 3px;
}
.product-item-box .discount {
  width: 44px;
  height: 44px;
  border-radius: 0px 20px 0px 20px;
  order: -1;
  position: absolute;
  background-color: #ef5350;
  color: white;
  right: 0;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-item-box .discount .discount-span{
  font-size: 14px;
}
.price-info{
  display: flex;
  padding-right: 123px;
}
.main-price{
  text-decoration: line-through;
  text-decoration-color: red;
  font-size: 12px;
  font-weight: 500;
}
.final-price{
  padding-right: 23px;
  padding-left: 5px;
  font-size: 16px;
  font-weight: 500;
}
.toman{
  font-size: 12px;
  font-weight: 500;
}
</style>
