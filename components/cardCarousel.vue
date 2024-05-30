<template>
  <Carousel :autoplay="4000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :transition="500">
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item">
        <q-card class="readCard" style="box-shadow: 0 0 0 #ccc">
          <img :src="slide.image" alt="" />
          <q-card-section>
            <div class="text-p text-black rankCarouselText">{{ slide.name }}</div>
            <!-- <div class="text-h6">NT{{slide.price}}</div> -->
          </q-card-section>
        </q-card>
      </div>
    </Slide>

    <template #addons>
      <navigation>
        <template #next>
          <img src="/index/iconRight.png" alt="next" />
        </template>
        <template #prev>
          <img src="/index/iconLeft.png" alt="prev" />
        </template>
      </navigation>
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = ref([
  {
    image: '/index/rank1.png',
    name: '世間水 WORLD WATER',
    price: '99,999'
  },
  {
    image: '/index/rank2.png',
    name: '夏日之泉 SUMMER WATER',
    price: '99,999'
  },
  {
    image: '/index/rank3.png',
    name: '冰川天然水',
    price: '99,999'
  },
  {
    image: '/index/rank4.png',
    name: '冰川黃金竹炭水',
    price: '99,999'
  },
  {
    image: '/index/rank5.png',
    name: '森淋泉經炭水',
    price: '99,999'
  },
  {
    image: '/index/rank6.png',
    name: '康力世天然水 CANLES WATER',
    price: '99,999'
  }
])
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center'
})

const breakpoints = ref({
  300: {
    itemsToShow: 1,
    snapAlign: 'center'
  },
  576: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  992: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  1200: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  1920: {
    itemsToShow: 3,
    snapAlign: 'center'
  }
})
</script>

<style lang="scss" scoped>
@import 'assets/components/cardCarousel';
</style>
