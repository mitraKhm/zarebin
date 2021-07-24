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
          :src="cartItemData.product.photo"
          class="img"
        />
      </div>
      <div class="d-flex flex-column detail">
        <p class="detail-title">
          {{ cartItemData.product.title }}
        </p>
        <div class="price-box mt-auto">
          <div class="d-flex prices align-center justify-endt">
            <p class="base-price ml-3">
              {{ cartItem.product.price.toman('base' , false) }}
            </p>
            <p class="final-price text-left">
              {{ cartItem.product.price.toman('final') ? cartItem.product.price.toman('final') : '۰ تومان' }}
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center align-center delete">
        <i
          class="fi fi-rr-trash trash-icon"
          @click="deleteItem"
        />
      </div>
    </div>
    <div class="d-flex justify-center align-center discount">
      <p>
        {{ countDiscount() }}%
      </p>
    </div>
  </v-card>
</template>

<script>
import {CartItem} from '../Models/CartItem';

export default {
  name: 'CartItemProduct',
  props: {
    cartItem: {
      type: CartItem,
      default(){
        return new CartItem()
      }
    }
  },
  data(){
    return {
     cartItemData: new CartItem()
    }
  },
  created() {
    this.cartItemData = this.cartItem
  },
  methods:{
    toast (message, type = 'success') {
      this.$toast(message, {
        type
      })
    },
    deleteItem(){
      this.$emit('itemDeleted')
      this.toast(`${this.cartItemData.product.title} از سبد حذف شد`)
    },
    countDiscount(){
      return  Math.round(((this.cartItemData.product.price.base - this.cartItemData.product.price.final) /(this.cartItemData.product.price.base))*100)
    }
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
        justify-content: center;
        padding-right: 40px;
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
    .trash-icon{
      cursor: pointer;
    font-size: 20px;
  }
  }
  .discount {
    position: absolute;
    bottom: 0;
    right: 106px;
    width: 47px;
    height: 36px;
    background-color: #ef5350;
    color: white;
    border-radius: 10px 10px 0 0 !important;
    p{
      font-size: 12px;
    }
  }
}
</style>

<style>
@media only screen and (max-width: 1904px) {
  .cart .cart-item .delete {
    padding: 0 14px;
  }

  .cart .cart-item .img-box {
    width: 60px;
    height: 60px;
  }

  .cart .cart-item .discount {
    right: 84px;
  }
}
</style>
