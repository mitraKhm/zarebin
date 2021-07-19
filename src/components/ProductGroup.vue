<template>
  <div>
    <!--    v-for="(product,index) in products.list"-->
    <!--    :key="index"-->
    <other-products
      v-for="item in Products"
      :key="item.title"
      :title="item.title"
      :products="item"
      @addToCart="addToCart"
      @showInfo="showProductInfo"
    />
  </div>
</template>
<script>
import {ProductList} from '@/Models/Product';
import OtherProducts from '@/components/OtherProducts';

export default {
  name: 'ProductGroup',
  computed: {
    Products () {
      const Products = []
      Products.push(new ProductList(JSON.parse(JSON.stringify(this.products))))
      Products.push(new ProductList(JSON.parse(JSON.stringify(this.products))))
      Products.push(new ProductList(JSON.parse(JSON.stringify(this.products))))
      Products.forEach((product) => product.title = 'تایتل دسته محصولات ' + Math.floor(Math.random() * 100))
      return Products
    }
  },
  props:{
    products:{
      type: ProductList,
      default(){
        return new ProductList()
      }
    },
    title:{
      type: String,
      default() {
        return 'محصولات دیگر';
      }
    }
  },
  components: {OtherProducts},
  methods:{
    addToCart(product){
      this.$emit('addToCart', product)
    },
    showProductInfo(product){
      this.$emit('showProductInfo', product)
    }
  }
}
</script>
