<template>
  <q-page>
    <!-- section1 -->
    <div class="section1">
      <img src="/world/bannerWeb.png" class="gt-sm" />
      <img src="/world/bannerApp.png" class="lt-md" />
    </div>
    <!-- section2 -->
    <div class="section2">
      <div class="section2Title">
        <div class="section2Logo">
          <img src="/world/worldWaterLogo.png" alt="世間水logo" ref="logo" style="opacity: 0" />
        </div>
        <div class="section2LogoTxt"><h5>我們相信，每一滴水都應該像泉源那般純淨，都是大自然的禮物，值得我們珍惜。</h5></div>
      </div>
      <div class="section2Txt">
        <p>
          「世間水」水廠，座落於台灣三大冷泉之一的彰化快官冷泉處，
          <br class="gt-sm" />
          地處環境清幽純淨，水質未受任何汙染，保留住水質的甘醇度。
        </p>
      </div>
    </div>
    <!-- section3 -->
    <div class="section3">
      <div class="section3Txt">
        <h6>水為萬物之源</h6>
        <p>
          當你打開“世間水”的瓶蓋，就好像開啟了那片遙遠森林的門扉，感受到那股從地底深處噴湧而出的清新。每一滴水，都像是大自然的呢喃，講述著那古老的傳說，吟唱生命源源不絕的樂章。
        </p>
      </div>
      <div class="section3Img">
        <img src="/world/worldPic1.png" alt="世間水1" />
      </div>
    </div>
    <!-- section4 -->
    <div class="section4">
      <div class="section4Top">
        <div class="section4Txt">
          <h6>珍惜世間水</h6>
          <p>上天賜予的每一滴水，無盡無私的恩澤大地。</p>
          <p>
            讓我們一起飲下這大自然的禮物，讓水流動的每一處，都充滿愛與希望。同時好好珍惜這每一口
            <span>世 間 水</span>
            。
          </p>
        </div>
        <div class="section4Img">
          <img src="/world/worldPic2.png" alt="世間水2" />
        </div>
      </div>
      <div class="section4Bottom">
        <div class="section4Txt">
          <h6>嚴謹製程</h6>
          <p>
            嚴謹的製作與品管，提供消費顧客安心無虞的瓶裝好水。
            <br />
            世間水水廠
            <span>榮獲ISO 22000與HACCP國家級的雙重認證</span>
            ，提供消費者安心無虞甘醇的瓶裝水。
          </p>
          <div class="medal">
            <img src="/world/medal1.png" alt="獎章" />
            <img src="/world/medal2.png" alt="獎章" />
          </div>
        </div>
        <div class="section4Img">
          <img src="/world/worldPic3.png" alt="世間水3" />
        </div>
      </div>
    </div>
    <!-- sectionVideo -->
    <div class="sectionVideo">
      <div class="video">
        <div class="videoWrapper">
          <video controls auto>
            <source src="/world/worldVd.mp4" type="video/mp4" class="iframe" />
          </video>
        </div>
      </div>
    </div>
    <!-- section5 -->
    <div class="section5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
      <div class="section5Content">
        <div class="sectionTitle">
          <img src="/index/titleIcon.png" alt="標題圖標" />
          <h6>專業認證</h6>
        </div>
        <div class="certificates">
          <div class="certificate">
            <img src="/world/certificate1.png" alt="證書" />
            <img src="/world/certificate2.png" alt="證書" />
          </div>
          <div class="certificate">
            <img src="/world/certificate3.png" alt="證書" />
            <img src="/world/certificate4.png" alt="證書" />
          </div>
        </div>
      </div>
    </div>
    <!-- section6 -->
    <bubble />
  </q-page>
</template>
<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
const logo = ref(null)

useHead({
  title: '世間水業界高規格的包裝飲用水工廠  ',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '世間水瓶裝水生產線以嚴謹的製作與品管，提供消費顧客安心無虞的瓶裝好水。同時榮獲ISO 22000與HACCP國家級的雙重認證，提供瓶裝水代工製造、600ml、1500ml大小水生產代工等OEM服務。  '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '世間水業界高規格的包裝飲用水工廠  '
    },
    {
      property: 'og:description',
      content:
        '世間水瓶裝水生產線以嚴謹的製作與品管，提供消費顧客安心無虞的瓶裝好水。同時榮獲ISO 22000與HACCP國家級的雙重認證，提供瓶裝水代工製造、600ml、1500ml大小水生產代工等OEM服務。  '
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
      content: 'https://www.springwater.tw/world'
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

let tl
onMounted(() => {
  AOS.init()
  tl = gsap
    .timeline()
    .from(logo.value, { x: -330, y: 0, opacity: 0 }) // 初始
    .to(logo.value, { x: -250, y: -180, ease: 'power1.out', duration: 0.3, opacity: 0 })
    .to(logo.value, { x: -200, y: 0, ease: 'power1.in', duration: 0.2, opacity: 1 })
    .to(logo.value, { x: -160, y: -130, ease: 'power1.out', duration: 0.3 })
    .to(logo.value, { x: -130, y: 0, ease: 'power1.in', duration: 0.2 })
    .to(logo.value, { x: -100, y: -70, ease: 'power1.out', duration: 0.3 })
    .to(logo.value, { x: -70, y: 0, ease: 'power1.in', duration: 0.2 })
    .to(logo.value, { x: -50, y: -30, ease: 'power1.out', duration: 0.1 })
    .to(logo.value, { x: -30, y: -20, ease: 'power1.in', duration: 0.2 })
    .to(logo.value, { x: -20, y: 0, ease: 'power1.out', duration: 0.1 })
    .to(logo.value, { x: -15, y: -10, ease: 'power1.in', duration: 0.2 })

    .to(logo.value, { x: -10, y: 0, ease: 'power1.in', duration: 0.2 })
    .to(logo.value, { x: -5, y: -5, ease: 'power1.in', duration: 0.2 })
    .to(logo.value, { x: 0, y: 0, ease: 'power1.in', duration: 0.1 })
})

onUnmounted(() => {
  if (tl) {
    tl.kill()
  }
})
</script>
<style lang="scss" scoped>
@import '/assets/world';
</style>
