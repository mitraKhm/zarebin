<template>
  <!-- App.vue -->
  <v-app v-resize="onResize">
    <app-bar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-row>
          <v-col>
            <banner />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            md="9"
            cols="12"
          >
            <product-info :product="currentProduct" />
            <product-price :product="currentProduct" />
            <other-products :products="otherProducts" />
          </v-col>
          <v-col
            md="3"
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
import './assets/Fonts/Flaticons/css/uicons-regular-rounded.css'
import './assets/Fonts/IRANSans/css/font.scss'
import Banner from './components/Banner';
import CartComponent from './components/Cart';
import ProductInfo from './components/ProductInfo';
import ProductPrice from './components/ProductPrice';
import OtherProducts from './components/OtherProducts';
import {Product, ProductList} from './Models/Product';
import {Cart} from './Models/Cart';
import AppBar from './components/AppBar';

export default {
  name: 'App',
  components: {
    AppBar,
    OtherProducts,
    ProductPrice,
    ProductInfo,
    CartComponent,
    Banner
  },
  created() {
    this.$vuetify.theme.dark = true
    // #26283b
  },
  data: () => ({
    currentProduct: new Product(),
    otherProducts: new ProductList(),
    cart: new Cart()
  }),
};
</script>

<style lang="scss">
.theme--dark {
  &.v-application {
    background: #26283b;
  }
  &.v-sheet {
    background-color: #313249;
    border-color: #313249;
  }
}
</style>
