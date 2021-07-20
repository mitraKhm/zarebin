<template>
  <v-card
    flat
    class="cart"
    color="#313249"
    dark
  >
    <p class="title">
      سبد خرید
    </p>
    <div class="cart-item-box">
      <cart-item
        v-for="item in cart.cartItems.list"
        :key="item.id"
        :cart-item="item"
        class="cart-item mx-7"
        @itemDeleted="removeItem(item.id)"
      />
    </div>
    <v-card
      flat
      color="#3a3b55"
      class="order-box"
    >
      <div class="mr-9 mb-7 pa-3">
        <div class="d-flex mb-7">
          <span class="ml-8">
            مبلغ خام : {{ cart.price.base }}
          </span>
          <span>
            میزان تخفیف : {{ cart.price.discount }}
          </span>
        </div>
        <div>
          <span class="ml-7">
            مبلغ نهایی و قابل پرداخت:
          </span>
          <span>
            {{ cart.price.final }} تومان
          </span>
        </div>
      </div>
      <v-row justify="center">
        <v-col cols="9">
          <v-btn
            depressed
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
            depressed
            color="#484967"
            height="60"
            class="delete-btn align-center justify-center"
          >
            <i
              class="fi-rr-trash"
              @click="deleteList"
            />
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
  props: {
    value: {
      type: Cart,
      default: new Cart()
    }
  },
  data() {
    return {
      cart: new Cart()
    }
  },
  created() {
    this.cart = this.value
  },
  computed: {},
  methods: {
    removeItem(cartId) {
      this.cart.removeItem(cartId)
    },
    deleteList() {
      this.cart.cartItems.list = []

    }
  }
}
</script>

<style scoped lang="scss">
.v-application p {
  margin-bottom: 0;
}

.cart {
  border-radius: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  max-height: calc(100vh - 86px);

  .title {
    font-size: 20px;
    padding-top: 20px;
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .cart-item-box {
    max-height: calc(100vh - 370px);;
    overflow: auto;
  }

  .order-box {
    border-radius: 20px;
    width: 100%;

    .submit-btn {
      font-size: 20px;
      letter-spacing: 0;
      border-radius: 15px;
      margin-right: 15px;
    }

    .delete-btn {
      font-size: 24px;
      border-radius: 15px;
    }
  }

}
</style>
