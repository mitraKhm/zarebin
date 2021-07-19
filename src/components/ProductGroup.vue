<template>
  <div>
    <!--    v-for="(product,index) in products.list"-->
    <!--    :key="index"-->
    <other-products :title="title" />
  </div>
</template>
<script>
import {ProductList} from '@/Models/Product';
import OtherProducts from '@/components/OtherProducts';

export default {
  name: 'ProductGroup',
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
  // methods:{
  //   addToCart(product){
  //     this.$emit('addToCart', product)
  //   },
  //   showProductInfo(product){
  //     this.$emit('showProductInfo', product)
  //   }
  // }
}
</script>
