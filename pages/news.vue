<template>
  <q-page>
    <!-- section1 -->
    <div class="section1">
      <img src="/news/bannerWeb.png" class="gt-sm" />
      <img src="/news/bannerApp.png" class="lt-md" />
    </div>
    <!-- section2 -->
    <div class="section2">
      <NuxtPage></NuxtPage>
    </div>
    <!-- section3 -->
    <bubble />
  </q-page>
</template>
<script setup>
useHead({
  title: '每天都要喝好水、喝水的重要性、健康喝水原則  ',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '喝水對人體非常重要，除了解渴外，對身體更是有許多好處。日常生活中我們要注意水份是否補充不足。至於要如何補水與如何喝好水呢？我們分享了喝水重要資訊與您一起多喝水！  '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '每天都要喝好水、喝水的重要性、健康喝水原則  '
    },
    {
      property: 'og:description',
      content:
        '喝水對人體非常重要，除了解渴外，對身體更是有許多好處。日常生活中我們要注意水份是否補充不足。至於要如何補水與如何喝好水呢？我們分享了喝水重要資訊與您一起多喝水！  '
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
      content: 'https://www.springwater.tw/news'
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
@import '/assets/news';
</style>
