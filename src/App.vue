<template>
  <!-- App.vue -->
  <v-app v-resize="onResize">
    <app-bar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container
        fluid
        class="body"
      >
        <v-row>
          <v-col>
            <banner v-if="false" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            lg="8"
            cols="12"
            class="d-flex flex-column"
          >
            <product-info
              :product="currentProduct"
              @addToCart="addToCart"
            />
            <!--            <product-price :product="currentProduct" />-->
            <product-group
              :products="otherProducts"
              @addToCart="addToCart"
              @showProductInfo="changeCurrentProduct"
            />
          </v-col>
          <v-col
            lg="4"
            cols="12"
          >
            <cart-component v-model="cart" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      v-if="false"
      app
    >
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import './assets/Fonts/Flaticons/css/uicons-regular-rounded.css'
import './assets/Fonts/IRANSans/css/font.scss'
import Banner from './components/Banner';
import CartComponent from './components/Cart';
import ProductInfo from './components/ProductInfo';
// import ProductPrice from './components/ProductPrice';
import {Product, ProductList} from './Models/Product';
import {Cart} from './Models/Cart';
import AppBar from './components/AppBar';
import ProductGroup from './components/ProductGroup';

export default {
  name: 'App',
  components: {
    ProductGroup,
    AppBar,
    // ProductPrice,
    ProductInfo,
    CartComponent,
    Banner
  },
  created() {
    this.$vuetify.theme.dark = true
    this.getOtherProducts()
  },
  data: () => ({
    windowSize: { 'x': 1920, 'y': 976 },
    currentProduct: new Product(),
    otherProducts: new ProductList(),
    cart: new Cart()
  }),
  methods: {
    toast (message, type = 'success') {
      this.$toast(message, {
        type
      })
    },
    addToCart (product) {
      const quantity = this.cart.addToCart(product)
      if (quantity) {
        this.toast(product.title.concat(' به سبد اضافه شد. تعداد در سبد: ' + quantity))
      } else {
        this.toast(product.title.concat(' به سبد اضافه نشد'), 'error')
      }
      // this.cart.cartItems.list.push(product)
    },
    changeCurrentProduct (product) {
      console.log('test')
      this.currentProduct = product
    },
    async getOtherProducts () {
      const response = await axios.get('https://alaatv.com/api/v2/product')
      if (response.status !== 200) {
        return
      }
      this.otherProducts = new ProductList(response.data.data)
      this.currentProduct = this.otherProducts.list[0]
    },
    onResize () {
      this.windowSize =  { x: window.innerWidth, y: window.innerHeight }
    },
  }
};
</script>

<style lang="scss">
.theme--dark {
  &.v-application {
    background: #26283b !important;
  }
  &.v-sheet {
    background-color: #313249;
    border-color: #313249 !important;
  }
}

.Vue-Toastification__toast-body {
  font-family: IRANSans;
}

@media only screen and (min-width: 1904px) {
  .body {
    padding: 12px 100px;
  }
}
@media only screen and (max-width: 1264px) {
  .body {
    padding: 12px 16px;
  }
}
</style>
