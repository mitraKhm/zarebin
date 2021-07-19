<template>
  <v-card
    elevation="0"
    color="#26283b"
    class="product-info"
  >
    <v-row>
      <v-col class="product-image-col">
        <v-img
          :src="product.photo"
          class="product-image"
        />
      </v-col>
      <v-col class="product-info-box">
        <v-row class="product-info-header">
          <div class="product-title">
            {{ product.title }}
          </div>
          <div class="product-label">
            <div>
              <i class="fi-rr-graduation-cap alaa-color relative-top" />
              پرویز کازرانیان
            </div>
            <div>
              <i class="fi-rr-book alaa-color relative-top" />
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
        <div class="download-description-box under-product-box d-flex flex-row justify-space-between">
          <div class="download-text">
            <i class="fi-rr-document alaa-color relative-top" />
            دانلود فایل توضیحات کامل دوره
          </div>

          <v-btn
            icon
            tile
            class="download-btn"
          >
            <i class="fi-rr-download relative-top" />
          </v-btn>

        </div>
      </v-col>
      <v-col md="7">
        <div class="buy-info-box under-product-box">
          <div class="discount-info">
            <div class="discount">
              ۳۵٪ <span>تخفیف</span>
            </div>
            <div class="original-price">
              1,500,000
            </div>
          </div>
          <div class="final-price">
            1,020,000 <span>تومان</span>
          </div>
          <div class="add-to-cart">
            <v-btn
              height="56px"
              color="#f7bb41"
            >
              افزودن به سبد
              <i class="fi-rr-shopping-cart-add relative-top" />
            </v-btn>
          </div>
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
.buy-info-box .add-to-cart .v-btn .v-btn__content {
  flex-direction: row;
  justify-content: space-around;
  font-weight: 500;
  font-size: 18px;
}

.buy-info-box .add-to-cart .v-btn {
  border-radius: 15px;
}

.buy-info-box .add-to-cart {
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 22px;
}

.buy-info-box .final-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}

.buy-info-box .final-price span {
  font-size: 18px;
  margin-right: 10px;
}

.buy-info-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.buy-info-box .discount-info .original-price {
  font-size: 18px;
  text-decoration: line-through #ef5350;
  padding-bottom: 8px;

}

.buy-info-box .discount-info {
  margin-right: 65px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  width: max-content;
}

.buy-info-box .discount-info .discount {
  width: 70px;
  height: 56px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #ef5350;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 20px;
}

.buy-info-box .discount-info .discount span {
  font-size: 14px;
}

.download-description-box .download-text {
  margin: 33px 33px 33px 0;
}

.download-description-box .download-btn {
  width: 56px;
  height: 56px;
  margin: 22px 0 22px 22px;
  background: #3a3b55;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s ease;
}

.download-description-box .download-btn i {
  left: 1px;
}

.product-info .download-description-box {

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
  padding-top: 20px;
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
  margin-left: 5px;
}

.relative-top {
  position: relative;
  top: 5px;
  font-size: 20px;
}
</style>
