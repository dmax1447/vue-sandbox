<template>
  <div>
    <h1 class="mb-5">Выпечка</h1>
    <!-- <img src="@/assets/images/slide1.jpg"> -->
    <!-- <img src="../assets/images/slide1.jpg"> -->
    <div class="mb-6">
      <h2 class="mb-3">Карусель: v-carousel</h2>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"

          :src="slide.src"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3 text-white">{{ slide.title }}</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div class="mb-6">
      <h2 class="mb-3">Табы: v-tabs</h2>

      <v-tabs
        v-model="tab"
      >
        <v-tab
          v-for="item in tabs"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in tabs"
          :key="item.tab"
        >
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </div>

    <div class="mb-">
      <h2 class="mb-3">Аккордеон: v-tabs</h2>
      <v-expansion-panels
        :accordion="false"
      >
        <v-expansion-panel
          v-for="(item,i) in tabs"
          :key="i"
        >
          <v-expansion-panel-header>{{ item.tab }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

  </div>
</template>

<script>

const src1 = require('@/assets/images/slide1.jpg');
const src2 = require('@/assets/images/slide2.jpg');
const src3 = require('@/assets/images/slide3.jpg');
const src4 = require('@/assets/images/slide4.jpg');


export default {
  data: () => ({
    clicked: null,
    slides: [
      { title: 'Пирожки', src: src1 },
      { title: 'Пельмени', src: src2 },
      { title: 'Беляши', src: src3 },
      { title: 'Кулебяки', src: src4 },
    ],
    tab: null,
    tabs: [
      { tab: 'Пирожки', content: 'Пирожки домашние, румяные, горячие. В пирожках заключена вся история кулинарного развития славянских народов, а они сами стали частью многих русских традиций. Испокон веков рецепты пирожков передавались от матери к дочери, совершенствовались способы приготовления теста, росло разнообразие начинок. ' },
      { tab: 'Пельмени', content: 'ельмени – знаменитое блюдо русской кухни, имеющее древние китайские, финно-угорские, тюркские и славянские корни. Современное название происходит от удмуртского «пельнянь» – «хлебное ухо». ' },
      { tab: 'Беляши', content: 'Беляши – традиционное блюдо татарской кухни – круглые (в форме ватрушки) или треугольные с отверстием пирожки из нежного теста с сочной ароматной мясной начинкой, зажаренные в масле до хрустящей корочки.' },
      { tab: 'Кулебяки', content: 'Традиционный русский пирог из дрожжевого теста - кулебяка. Подается кулебяка с мясом к мясному бульону, чаю. Рецепт кулебяки может включать и любые другие начинки. Нужно только помнить, что начинки для кулебяки должны быть готовыми, т.е. прошедшими тепловую обработку.' },
    ],


  }),
  methods: {
    btnClickHandler() {
      console.log('btn');
    },
  },
};
</script>

<style>
</style>
