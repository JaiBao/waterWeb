<template>
  <q-page>
    <!-- //section1 -->
    <div class="section1">
      <img src="/index/bannerWeb.png" class="gt-sm" />
      <img src="/index/bannerApp.png" class="lt-md" />
      <div class="absolute-center custom-caption"></div>
    </div>
    <!-- section2 -->
    <div class="section2">
      <q-card class="section2Card" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <div class="sectionTitle">
          <img src="/index/titleIcon.png" alt="標題圖標" />
          <h6>服務項目</h6>
        </div>
        <div class="section2Img">
          <img src="/index/service01.png" alt="服務1" />
          <img src="/index/service02.png" alt="服務2" />
          <img src="/index/service03.png" alt="服務3" />
        </div>
      </q-card>
    </div>
    <!-- section3 -->
    <div class="section3">
      <div class="sectionTitle">
        <img src="/index/titleIcon.png" alt="標題圖標" />
        <h6>品牌故事</h6>
      </div>
      <div class="section3Content">
        <h5>
          源於
          <span>「水泉水」</span>
          <br />
          對生活的熱愛和對大自然的敬畏。
        </h5>

        <!-- 介紹 -->
        <p>
          我們的創始人曾經親歷世界各地，品嚐了來自不同水源。這樣的經驗讓他深深體會到水的純樸之美，以及它們如何融入各個文化和生活場景中。受到這份熱愛和敬畏的啟發，創立了「水泉水」公司。
        </p>

        <!-- 影片 -->
        <div class="video">
          <div class="videoWrapper">
            <video controls auto>
              <source src="/index/fontMovie.mp4" type="video/mp4" class="iframe" />
            </video>
          </div>
        </div>
        <h5>
          擁有純淨水源的
          <span>「世間水」</span>
          水廠
        </h5>
        <p>
          位於台灣三大冷泉之一的彰化快官冷泉處，地處環境清幽純淨，水質未受任何汙染， 保留住水質的甘醇度。嚴謹的製作與品管，榮獲ISO
          22000與HACCP國家級的雙重認證，提供消費者安心無虞甘醇的瓶裝水。
        </p>
      </div>
    </div>
    <!-- section4 -->
    <productRank />
    <!-- section5 -->
    <div class="section5">
      <!-- <img src="/index/distribution.png" alt="經銷背景" /> -->
      <div class="section5Content">
        <h6>瓶裝水大量訂購、經銷</h6>
        <p>
          水是地球最重要、最珍貴的大自然資源，在台灣飲用水中大多水源來自河流，部分則取自地下水，目前台灣河川汙染，水質也遭受影響，所以可用的水資源相對稀有。水是構成人體的重要成分，每天喝2000cc的水，是身體保健的最佳方式。
          水泉水生技堅持販售最優質的飲用水，純淨、自然、專業給您最頂級的好水，讓消費者能喝的安心健康，業務合作或其他事宜歡迎您透過聯絡表單與我們聯繫。
        </p>
        <q-btn @click="openEmailDialog">聯繫我們</q-btn>
      </div>
    </div>
    <!-- section6 -->
    <!-- <div class="section6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
      <div class="sectionTitle">
        <img src="/index/titleIcon.png" alt="標題圖標" />
        <h6>健康資訊</h6>
      </div>
      <div class="section6Cards">
        <q-card class="section6Card" v-for="article in articles" :key="article.id">
          <img :src="article.image" />

          <q-card-section>
            <h6>{{ article.title }}</h6>
            <p class="time">
              time :
              <span>{{ article.date }}</span>
            </p>
            <p class="content">{{ article.content }}</p>
            <nuxt-link :to="`/news/content/${article.id}`"><q-btn>READ MORE</q-btn></nuxt-link>
          </q-card-section>
        </q-card>
      </div>
    </div> -->
    <!-- section7 -->
    <bubble />
  </q-page>
</template>

<script setup>
import { useDialogStore } from '/stores/useDialogStore'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { emailDialog, openEmailDialog } = useDialogStore()

useHead({
  title: '水泉水生技｜專業瓶裝水經銷與代工 - 高品質礦泉水選擇',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '源於「水泉水」對生活的熱愛和對大自然的敬畏！擁有ISO 22000 與 HACCP 國家級雙重認證水廠，提供最純淨水源的瓶裝水，業界高品質瓶裝水，歡迎總經銷、總代理來電洽談，服務專線(04)737-5181。 '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '水泉水生技｜專業瓶裝水經銷與代工 - 高品質礦泉水選擇'
    },
    {
      property: 'og:description',
      content:
        '源於「水泉水」對生活的熱愛和對大自然的敬畏！擁有ISO 22000 與 HACCP 國家級雙重認證水廠，提供最純淨水源的瓶裝水，業界高品質瓶裝水，歡迎總經銷、總代理來電洽談，服務專線(04)737-5181。 '
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
      content: 'https://www.springwater.tw/'
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

const articles = ref([
  {
    id: 1,
    image: '/news/new1.png',
    title: '健康喝水原則',
    date: '2023-10-01',
    content: '人體有70%是水組成的，身體各個器官與系統都仰賴水分的補給才能維持基礎運作。天氣漸漸炎熱，更該補充水份將以利身體代謝和調節體溫。......'
  },
  {
    id: 2,
    image: '/news/new2.png',
    title: '水對人體的重要',
    date: '2023-10-01',
    content: '水是人體最重要的組成成分，我們體內有60%是水，而大腦就含有75%以上的水量。 大腦正不正常，水是關鍵之一，研究證實人體的大腦......'
  },
  {
    id: 3,
    image: '/news/new3.png',
    title: '喝水的好處',
    date: '2023-10-01',
    content: '水可以說是生命的基礎，也是全身關節的潤滑劑，更是神經系統的緩衝劑。人體有70%是水組成的，人體如果喪失10％水分時即會感到不適......'
  }
])
onMounted(() => {
  AOS.init()
})
</script>

<style lang="scss" scoped>
@import '/assets/index';
</style>
