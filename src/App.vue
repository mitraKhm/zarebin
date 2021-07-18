<template>
  <!-- App.vue -->
  <v-app v-resize="onResize">
    <v-app-bar
      app
      color="transparent"
      dark
      absolute
      :elevation="0"
      height="59px"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
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
            <product-info />
            <product-price />
            <other-products />
          </v-col>
          <v-col
            md="3"
            cols="12"
          >
            <cart />
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
import Cart from './components/Cart';
import ProductInfo from './components/ProductInfo';
import ProductPrice from './components/ProductPrice';
import OtherProducts from './components/OtherProducts';

export default {
  name: 'App',
  components: {
    OtherProducts,
    ProductPrice,
    ProductInfo,
    Cart,
    Banner
  },
  created() {
    this.$vuetify.theme.dark = true
    // #26283b
  },
  data: () => ({
    //
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
