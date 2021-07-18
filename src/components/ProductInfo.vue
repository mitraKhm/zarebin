<template>
  <v-card
    elevation="0"
    color="#26283b"
    class="product-info"
  >
    <v-row >
      <v-col class="product-image-col">
        <v-img :src="product.photo" class="product-image" />
      </v-col>
      <v-col class="product-info-box">
        <v-row class="product-info-header">
          <div class="product-title">
            {{ product.title }}
          </div>
          <div class="product-label">
            <div>
              <i class="fi-rr-graduation-cap alaa-color relative-top"></i>
              پرویز کازرانیان
            </div>
            <div>
              <i class="fi-rr-book alaa-color relative-top"></i>
              رشته تجربی
            </div>
          </div>
        </v-row>
        <v-row class="product-description">
          <p>توضیحات:</p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="py-10 flex-row justify-space-between">
      <v-col md="5">
        <div class="download-description-box under-product-box"></div>
      </v-col>
      <v-col md="7">
        <div class="buy-info-box under-product-box">

        </div>
      </v-col>


    </v-row>
  </v-card>
</template>

<script>
import {Product} from '../Models/Product';

export default {
  name: 'ProductInfo',
  props: {
    product: {
      type: Product,
      default: new Product()
    }
  }
}
</script>

<style scoped>

</style>

<style>
.product-info .download-description-box {
  margin-left: 48px;
}

.product-info .buy-info-box {

}

.product-info .under-product-box {
  height: 100px;
  background: #313249;
  border-radius: 20px;
}


.product-info .product-image-col {
  border-radius: 40px;
  background: #f7bb41;
  padding: 10px;
  width: 320px;
  height: 320px;
}

.product-info .product-image {
  border-radius: 30px;
}

.product-info-box.col {
  flex-grow: 4;
  padding: 20px 40px;
}

.product-info-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.product-info-header .product-label {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.product-info-header .product-label div:nth-child(1) {
  margin-left: 50px;
}

.product-info-header .product-title {
  font-size: 20px;
  font-weight: 500;
}

.product-info .product-description {
  padding-top: 30px;
}

.product-info .product-description p:nth-child(1) {
  font-size: 20px;
}

.product-info .product-description p {
  text-align: justify;
  line-height: 2;
}

.alaa-color {
  color: #f7bb41;
}

.relative-top {
  position: relative;
  top: 4px;
  margin-left: 5px;
}
</style>
