<template>
  <!-- App.vue -->
  <v-app v-resize="onResize">
    <app-bar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="body">
        <v-row>
          <v-col>
            <banner v-if="false" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            md="8"
            cols="12"
            class="d-flex flex-column"
          >
            <product-info :product="currentProduct" />
<!--            <product-price :product="currentProduct" />-->
            <other-products :products="otherProducts" @addToCart="addToCart" />
          </v-col>
          <v-col
            md="4"
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
import OtherProducts from './components/OtherProducts';
import {Product, ProductList} from './Models/Product';
import {Cart} from './Models/Cart';
import AppBar from './components/AppBar';

export default {
  name: 'App',
  components: {
    AppBar,
    OtherProducts,
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
    addToCart (product) {
      this.cart.cartItems.list.push(product)
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

.body {
  padding: 12px 100px;
}
</style>
