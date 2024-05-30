<template>
  <q-page>
    <!-- section1 -->
    <div class="section1">
      <img src="/worldWater/bannerWeb.jpg" class="gt-sm" />
      <img src="/worldWater/bannerApp.jpg" class="lt-md" />
    </div>
    <!-- section2 -->
    <div class="section2 lt-md">
      <img src="/worldWater/app1.jpg" alt="water" />
      <img src="/worldWater/app2.jpg" alt="water" />
      <img src="/worldWater/app3.jpg" alt="water" />
    </div>
    <div class="section2 gt-sm">
      <img src="/worldWater/web1.jpg" alt="water" />
      <img src="/worldWater/web2.jpg" alt="water" />
      <img src="/worldWater/web3.jpg" alt="water" />
    </div>
    <!-- section3 -->
    <div class="section3">
      <drinkTime />
      <div class="pageBtns">
        <q-btn class="pageBtn" to="/glacierProduct">
          <q-icon name="chevron_left" />
          冰川
        </q-btn>
        <q-btn class="pageBtn" to="/allProduct">
          商品總覽
          <q-icon name="chevron_right" />
        </q-btn>
      </div>
    </div>
    <!-- section4 -->
    <bubble />
  </q-page>
</template>
<script setup>
useHead({
  title: '源自台灣三大冷泉之一的世間水礦泉水 ',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '榮獲2006年優良食品評鑑會金牌獎，來自彰化快官冷泉，水質甘醇純淨天然，符合食品衛生標準製造的包裝飲用水。我們有市場最實在的礦泉水批發價格，歡迎北中南總代理與經銷。 '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '源自台灣三大冷泉之一的世間水礦泉水 '
    },
    {
      property: 'og:description',
      content:
        '榮獲2006年優良食品評鑑會金牌獎，來自彰化快官冷泉，水質甘醇純淨天然，符合食品衛生標準製造的包裝飲用水。我們有市場最實在的礦泉水批發價格，歡迎北中南總代理與經銷。 '
    },
    {
      property: 'og:image',
      content: '/default/logo.png' // 使用你的圖片路徑
    },
    {
      property: 'og:image:alt',
      content: '水泉水圖片'
    },
    {
      property: 'og:url',
      content: 'https://www.springwater.tw/worldProduct'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'author',
      content: 'bao'
    },

    { name: 'google-site-verification', content: 'LuY-R48YMOEGA7TIXFfcuFHbA7OV-Narkw8-G4La-Ek' }
    // ...
  ]
})
</script>
<style lang="scss" scoped>
@import '/assets/worldProduct';
</style>
