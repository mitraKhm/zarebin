<template>
  <v-card
    color="#3a3b55"
    flat
    dark
    class="cart-item mb-5"
  >
    <div class="d-flex justify-space-between">
      <div class="img-box">
        <v-img
          src="../assets/test_img.jpg"
          class="img"
        />
      </div>
      <div class="d-flex flex-column detail">
        <p class="detail-title">
          پک اختصاصی راه
        </p>
        <div class="price-box mt-auto">
          <div class="d-flex prices align-center justify-endt">
            <p class="base-price ml-3">
              1,500,000
            </p>
            <p class="final-price text-left">
              1,050,000 تومان
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center align-center delete">
        <v-icon color="white">
          mdi-delete-outline
        </v-icon>
      </div>
    </div>
    <div class="d-flex justify-center align-center discount">
      <p>
        25%
      </p>
    </div>
  </v-card>
</template>

<script>
import {CartItemList} from '../Models/CartItem';

export default {
  name: 'CartItem',
  props:{
    value :{
      type:CartItemList,
      default:new CartItemList()
    }
  },
  data(){
    return {
      cartItem:[]
    }
  },
  created() {
    this.cartItem = this.value
  }
}

</script>

<style scoped lang="scss">
.v-application p{
  margin-bottom: 0;
}
.cart-item {
  border-radius: 20px;
  padding: 10px;

  .img-box {
    width: 80px;
    height: 80px;

    .img {
      border-radius: 15px;
    }
  }
  .detail{
    width: 100%;
    padding-right: 15px;
    .detail-title{
    }
    .price-box{
      .prices{
        justify-content: end;
        .final-price{
          font-size: 16px;
        }
        .base-price{
          font-size: 12px;
          text-decoration: line-through;
          text-decoration-color: red;
        }
      }
    }
  }
  .delete {
    padding: 0 20px;
  }
  .discount {
    position: absolute;
    bottom: 0;
    right: 106px;
    width: 47px;
    height: 36px;
    background-color: red;
    color: white;
    border-radius: 10px 10px 0 0 !important;
  }
}
</style>
