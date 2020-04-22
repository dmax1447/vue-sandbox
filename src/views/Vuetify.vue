<template>
  <div>
    <h1 class="mb-5">Vuetify page content</h1>
    <div class="mb-4">
      <h3>Buttons raised (обычные):</h3>
      <v-btn class="mr-2" @click="btnClickHandler">normal</v-btn>
      <v-btn class="mr-2" color="primary" @click="btnClickHandler">primary</v-btn>
      <v-btn class="mr-2" color="error" @click="btnClickHandler">error</v-btn>
      <v-btn class="mr-2" disabled @click="btnClickHandler">disabled</v-btn>
    </div>

    <div class="mb-4">
      <h3>Buttons outlined:</h3>
      <v-btn class="mr-2" outlined @click="btnClickHandler">normal</v-btn>
      <v-btn class="mr-2" outlined color="primary" @click="btnClickHandler">primary</v-btn>
      <v-btn class="mr-2" outlined color="error" @click="btnClickHandler">error</v-btn>
      <v-btn class="mr-2" outlined disabled @click="btnClickHandler">disabled</v-btn>
    </div>

    <h3>Carousel</h3>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    clicked: null,
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
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
