<template>
  <!-- productRank -->
  <div class="productRank">
    <div class="sectionTitle">
      <img src="/index/titleIcon.png" alt="標題圖標" />
      <h6>熱銷排行</h6>
    </div>
    <div class="rankCarousel lt-md">
      <cardCarousel />
    </div>
    <div class="rankCards gt-sm">
      <q-card class="rankCard" style="box-shadow: 0 0 0 #ccc" v-for="(rank, index) in ranks" :key="index">
        <img :src="rank.image" />
        <q-card-section>
          <div class="text-p text-black rankCardText">{{ rank.name }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
const ranks = ref([
  {
    image: '/index/rank1.png',
    name: '世間水 WORLD WATER'
  },
  {
    image: '/index/rank2.png',
    name: '夏日之泉 SUMMER WATER'
  },
  {
    image: '/index/rank3.png',
    name: '冰川天然水'
  },
  {
    image: '/index/rank4.png',
    name: '冰川黃金竹炭水'
  },
  {
    image: '/index/rank5.png',
    name: '森淋泉經炭水'
  },
  {
    image: '/index/rank6.png',
    name: '康力世天然水 CANLES WATER'
  }
])
</script>
<style lang="scss" scoped>
@import '/assets/components/productRank';
</style>
