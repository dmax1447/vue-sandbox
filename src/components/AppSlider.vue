<template>
  <div class="thumb-example app-slider">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <img class="app-slider__img"  :src="slide.src">
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide class="slide slide-thumb" v-for="(slide, idx) in slides" :key="idx">
        <img class="app-slider__img-thumb" :src="slide.src">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
const src1 = require('@/assets/images/slide1.jpg');
const src2 = require('@/assets/images/slide2.jpg');
const src3 = require('@/assets/images/slide3.jpg');
const src4 = require('@/assets/images/slide4.jpg');

export default {
  name: 'AppSlider',
  data() {
    return {
      slides: [
        { title: 'Пирожки', src: src1 },
        { title: 'Пельмени', src: src2 },
        { title: 'Беляши', src: src3 },
        { title: 'Кулебяки', src: src4 },
        { title: 'Пирожки', src: src1 },
        { title: 'Пельмени', src: src2 },
        { title: 'Беляши', src: src3 },
        { title: 'Кулебяки', src: src4 },
      ],
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true, // поменять на false для того чтобы прижать влево
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss">
$gap: 10px;

.app-slider {
  height: 600px;
  outline: 1px dotted gray;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__img-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      width: 100%;
      box-sizing: border-box;
      padding: $gap 0;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
}
</style>
