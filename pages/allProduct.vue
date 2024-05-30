<template>
  <q-page>
    <!-- section1 -->
    <div class="section1">
      <img src="/allProduct/bannerWeb.png" class="gt-sm" />
      <img src="/allProduct/bannerApp.png" class="lt-md" />
    </div>
    <!-- section2 -->
    <productRank />
    <!-- section3 -->
    <div class="section3">
      <allProduct />
    </div>
    <!-- section4 -->
    <bubble />
  </q-page>
</template>
<script setup>
useHead({
  title: '水泉水生技 - 多元化礦泉水產品，全面經銷與代理服務  ',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '水泉水生技擁有十數十款瓶裝水，產品涵蓋世間水、快感竹炭水、冰川竹炭水、金讚竹炭水、竹讚竹炭水、按個讚竹炭水、金竹竹炭水、尚讚礦泉水等，總經銷、代理歡迎洽詢。  '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '水泉水生技 - 多元化礦泉水產品，全面經銷與代理服務 '
    },
    {
      property: 'og:description',
      content:
        '水泉水生技擁有十數十款瓶裝水，產品涵蓋世間水、快感竹炭水、冰川竹炭水、金讚竹炭水、竹讚竹炭水、按個讚竹炭水、金竹竹炭水、尚讚礦泉水等，總經銷、代理歡迎洽詢。  '
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
      content: 'https://www.springwater.tw/allProduct'
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
@import 'assets/allProduct';
</style>
