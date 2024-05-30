<template>
  <q-page>
    <!-- //section1 -->
    <div class="section1">
      <img src="/about/bannerWeb.png" class="gt-sm" />
      <img src="/about/bannerApp.png" class="lt-md" />
    </div>
    <!-- //section2 -->
    <div class="section2">
      <div class="sectionTitle">
        <img src="/index/titleIcon.png" alt="標題圖標" />
        <h6>關於我們</h6>
      </div>
      <div class="section2Content">
        <h6><span>Springwater=Spring​+Water</span></h6>
        <h6>
          Springwater（水泉水）是由英文中的"spring"（泉水）
          <br class="lt-sm" />
          和"water"（水）組成的詞語。 它代表著我們品牌的價值觀
          <br class="lt-sm" />
          和承諾，傳達著
          <span>開啟新契機</span>
          、
          <span>源泉純淨</span>
          和
          <span>充滿能量</span>
          的訊息。
        </h6>
        <h6>
          水泉水生技股份有限公司長年經營瓶裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始前進，不斷思索如何研發出不單單符合食品安全的飲用水，而是更進一步的從人體所需為出發點思索如何補充其關鍵元素，使人體能達到平衡為目的的優質產品。
        </h6>

        <img src="/about/pic1.png" alt="契機" />
      </div>
    </div>
    <!-- //section3 -->
    <div class="section3">
      <q-card class="section3Card" flat>
        <div class="cardText">
          <h5 class="text-grey-9">我們的願景</h5>
          <h6 class="text-grey-9">
            以深深的對大自然的敬畏之心，我們創造出最
            <span class="text-pink-8">純樸無瑕的飲品</span>
            。
          </h6>
          <h6>無論人們身處繁忙的餐廳還是溫馨的家，都能輕易品嚐到生活最純粹、 最美好的一面。」</h6>
          <br class="gt-xs" />
          <h6 class="text-grey-9">
            「我們的獨特之處體現在對
            <span class="text-pink-8">每一滴水</span>
            、
            <span class="text-pink-8">每一瓶水深沉的敬意</span>
            」。
          </h6>
          <h6>我們提供的是源自快官泉水的瓶裝水，這是經過精心挑選的純淨泉源。</h6>
          <h6>每一滴都滲透著我們的熱情和對大自然的敬畏。</h6>
        </div>
        <div class="cardImg">
          <img src="/about/pic2.png" />
        </div>
      </q-card>
    </div>
    <!-- //section4 -->
    <div class="section4">
      <q-card class="section4Card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
        <div class="sectionTitle">
          <img src="/index/titleIcon.png" alt="標題圖標" />
          <h6>核心價值</h6>
        </div>
        <div class="section4Text">
          <p>
            重視與尊敬各種環境和多元價值觀共生，
            我們追求一種更加真誠和純淨的生活方式，在這種和諧的價值觀引領下，我們能夠建立起更加穩健和可持續的生態系統，實現人與自然的共融共榮。
          </p>
        </div>
        <div class="section4Img">
          <img src="/about/core1.png" />
          <img src="/about/core2.png" />
          <img src="/about/core3.png" />
        </div>
      </q-card>
    </div>
    <!-- section5 -->
    <bubble />
  </q-page>
</template>
<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

useHead({
  title: '水泉水生技深耕經營瓶裝飲用水市場 ',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '水泉水生技股份有限公司長年經營瓶裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始前進，高標準的製作，業界最優質的瓶裝飲用水。  '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '水泉水生技深耕經營瓶裝飲用水市場'
    },
    {
      property: 'og:description',
      content:
        '水泉水生技股份有限公司長年經營瓶裝飲用水市場，深刻了解「水」之於人體的重要性，從符合法規要求的食品安全基準線開始前進，高標準的製作，業界最優質的瓶裝飲用水。  '
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
      content: 'https://www.springwater.tw/about'
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

onMounted(() => {
  AOS.init()
})
</script>
<style lang="scss" scoped>
@import 'assets/about';
</style>
