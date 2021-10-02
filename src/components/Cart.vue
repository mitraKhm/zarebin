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
    <div :class="{ 'cart-item-box': true, 'empty': cart.isEmpty() }">
      <transition-group
        name="list"
        tag="p"
      >
        <cart-item
          v-for="item in cart.cartItems.list"
          :key="item.id"
          :cart-item="item"
          class="cart-item mx-xl-7 mx-4"
          @itemDeleted="removeItem(item.id)"
        />
      </transition-group>
      <transition name="fade">
        <div
          v-if="cart.isEmpty()"
          class="empty-cart-box"
        >
          <v-img src="https://node3.alaatv.com/upload/zarebin_empty_cart.png" />
          <p>شما محصولی را انتخاب نکرده اید</p>
        </div>
      </transition>
    </div>
    <v-card
      flat
      color="#3a3b55"
      class="order-box"
    >
      <div class="mx-xl-9 mx-2 mb-xl-4 mb-2 pa-3">
        <div class="d-flex mb-xl-7 mb-lg-5 justify-space-between flex-lg-column">
          <p class="d-lg-flex justify-space-between">
            مبلغ خام :
            <span>
              {{ cartBaseAnimated }} تومان
            </span>
          </p>
          <p class="d-lg-flex justify-space-between mt-lg-2">
            میزان تخفیف :
            <span>
              {{ cartDiscountAnimated }} تومان
            </span>
          </p>
        </div>
        <div class="d-flex justify-space-between">
          <span>
            مبلغ نهایی و قابل پرداخت:
          </span>
          <span>
            {{ cartFinalAnimated }} تومان
          </span>
        </div>
      </div>
      <v-row
        justify="center"
        class="mx-xl-9 mx-lg-2"
      >
        <v-col
          xl="10"
          cols="9"
        >
          <v-btn
            :disabled="cart.isEmpty()"
            depressed
            color="#4caf50"
            height="60"
            width="100%"
            class="submit-btn"
          >
            ادامه و ثبت سفارش
          </v-btn>
        </v-col>
        <v-col
          xl="2"
          cols="3 text-end"
        >
          <v-btn
            :disabled="cart.isEmpty()"
            depressed
            color="#484967"
            height="60"
            class="delete-btn align-end justify-center"
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
import gsap from 'gsap';

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
      cart: new Cart(),
      cartFinal: 0,
      cartBase: 0,
      cartDiscount: 0,
    }
  },
  watch: {
    'cart.price.final': function (newValue) {
      gsap.to(this.$data, { duration: 1, cartFinal: newValue })
    },
    'cart.price.base': function (newValue) {
      gsap.to(this.$data, { duration: 1, cartBase: newValue })
    },
    'cart.price.discount': function (newValue) {
      gsap.to(this.$data, { duration: 1, cartDiscount: newValue })
    },
  },
  computed: {
    cartFinalAnimated () {
      return this.currencyFormat(this.cartFinal)
    },
    cartBaseAnimated () {
      return this.currencyFormat(this.cartBase)
    },
    cartDiscountAnimated () {
      return this.currencyFormat(this.cartDiscount)
    },
  },
  created() {
    this.cart = this.value
    this.cartFinal = this.cart.price.final
    this.cartBase = this.cart.price.base
    this.cartDiscount = this.cart.price.discount
  },
  methods: {
    currencyFormat (value) {
      if (!value) {
        return 0
      }
      return parseInt(value.toFixed(0)).toLocaleString('fa')
    },
    removeItem(cartId) {
      this.cart.removeItem(cartId)
    },
    deleteList() {
      this.cart.removeAllItems()
      this.$toast('سبد خرید خالی شد', { type: 'success' })
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
    max-height: calc(100vh - 370px);
    min-height: 100px;
    overflow: auto;
    transition: min-height 1s ease;
  }

  .order-box {
    border-radius: 20px;
    width: 100%;

    .submit-btn {
      font-size: 20px;
      letter-spacing: 0;
      border-radius: 15px;
    }

    .delete-btn {
      font-size: 24px;
      border-radius: 15px;
    }
  }

  .delete-btn .fi-rr-trash {
    margin-bottom: 2px;
    margin-left: 5px;
  }

}

</style>

<style>
.list-item {
  margin-right: 10px;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter {
  opacity: 0;
  transform: translateX(-550px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(550px);
}

.cart-item-box {
  overflow-x: hidden !important;
}

.cart .cart-item-box.empty {
  min-height: 380px;
}

.empty-cart-box {
  position: absolute;
  top:100px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.empty-cart-box .v-image {
  margin-right: 26px;
}

.empty-cart-box p {
  margin-top: 40px;
}

</style>
