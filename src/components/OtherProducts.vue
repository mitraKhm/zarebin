<template>
  <v-card class="other-products-box" elevation="0" color="#26283b">
      محصولات دیگر
      <v-row>
        <v-col
          v-for="item in 20"
          :key="item"
          md="3"
          sm="6"
          cols="12"
        >
          <product-item />
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
import ProductItem from './ProductItem';
export default {
  name: 'OtherProducts',
  components: {ProductItem}
}
</script>

<style scoped>

</style>
<style>
.other-products-box .theme--light.v-sheet {
  background-color: #26283b;
}
</style>
