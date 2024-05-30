<template>
  <q-page>
    <!-- section1 -->
    <div class="section1">
      <img src="/glacier/bannerWeb.jpg" class="gt-sm" />
      <img src="/glacier/bannerApp.jpg" class="lt-md" />
    </div>
    <!-- section2 -->
    <div class="section2 lt-md">
      <img src="/glacier/app1.jpg" alt="water" />
      <img src="/glacier/app2.jpg" alt="water" />
      <img src="/glacier/app3.jpg" alt="water" />
    </div>
    <div class="section2 gt-sm">
      <img src="/glacier/web1.jpg" alt="water" />
      <img src="/glacier/web2.jpg" alt="water" />
      <img src="/glacier/web3.jpg" alt="water" />
    </div>
    <!-- section3 -->
    <div class="section3">
      <drinkTime />
      <div class="pageBtns">
        <q-btn class="pageBtn" to="/allProduct">
          <q-icon name="chevron_left" />
          商品總覽
        </q-btn>
        <q-btn class="pageBtn" to="/worldProduct">
          WORLD WATER
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
  title: '冰川瓶裝水 - 純淨來源，時尚包裝，您的理想選擇',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '冰川礦泉水大水每箱12瓶、小水每箱24瓶，時尚的瓶裝水設計廣受好評。冰川瓶裝水挑戰市場最低價，絕對是老闆們銷售利器，歡迎總代理、總經銷、批發商來電與我們聯絡。'
    },
    // Open Graph
    {
      property: 'og:title',
      content: '冰川瓶裝水 - 純淨來源，時尚包裝，您的理想選擇 '
    },
    {
      property: 'og:description',
      content:
        '冰川礦泉水大水每箱12瓶、小水每箱24瓶，時尚的瓶裝水設計廣受好評。冰川瓶裝水挑戰市場最低價，絕對是老闆們銷售利器，歡迎總代理、總經銷、批發商來電與我們聯絡。'
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
      content: 'https://www.springwater.tw/glacierProduct'
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
@import '/assets/glacierProduct';
</style>
