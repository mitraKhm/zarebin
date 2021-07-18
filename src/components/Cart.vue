<template>
  <v-card
    class="cart"
    color="#313249"
    dark
  >
    <p class="title">
      سبد خرید
    </p>
    <div class="cart-item-box">
      <cart-item
        v-for="item in 15"
        :key="item"
        class="cart-item mx-7"
      />
    </div>
    <v-card
      color="#3a3b55"
      class="order-box"
    >
      <div class="mr-9 mb-7 pa-3">
        <div class="d-flex mb-7">
          <span class="ml-8">
            مبلغ خام : 4,500,000
          </span>
          <span>
            میزان تخفیف : 4,500,000
          </span>
        </div>
        <div>
          <span class="ml-7">
            مبلغ نهایی و قابل پرداخت:
          </span>
          <span>
            3,150,000 تومان
          </span>
        </div>
      </div>

      <v-row justify="center">
        <v-col cols="9">
          <v-btn
            color="#4caf50"
            height="60"
            width="100%"
            class="submit-btn"
          >
            ادامه و ثبت سفارش
          </v-btn>
        </v-col>
        <v-col cols="3 text-center">
          <v-btn
            color="#484967"
            height="60"
            class="delete-btn"
          >
            <v-icon>
              mdi-delete-outline
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import CartItem from './CartItem';
import {Cart} from '../Models/Cart';
export default {
  name: 'Cart',
  components: {CartItem},
  props:{
    value:{
      type:Cart,
      default: new Cart()
    }
  }
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
  top:10px;
  max-height: calc( 100vh - 86px );
  .title{
    font-size: 20px;
    padding-top: 20px;
    margin-right: 30px;
    margin-bottom: 20px;
  }
  .cart-item-box{
    max-height: 600px;
    overflow: auto;
  }
  .order-box{
    border-radius: 20px;
    width: 100%;
    .submit-btn{
      border-radius: 15px;
      margin-right: 15px;
    }
    .delete-btn{
      border-radius: 15px;
    }
  }

}
</style>
