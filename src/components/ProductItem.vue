<template>
  <v-card class="product-item-box" elevation="0">
    <v-responsive :aspect-ratio="1">
      <v-card-text>
        Product item
      </v-card-text>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem'
}
</script>

<style scoped>
.v-sheet.v-card .product-item-box{
  border-radius: 25px;
  background-color: #313249;
}
</style>
