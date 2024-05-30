<template>
  <!-- productRank -->
  <div class="productRank">
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
  </div>
</template>
<script setup>
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
  },
  {
    id: 4,
    image: '/news/new4.png',
    title: '冬天也要補水',
    date: '2023-10-01',
    content: '天氣冷，許多民眾都會忘記補充水分，或自以為沒流汗就可以不用喝水，但要注意，這樣可是會影響身體健康！營養師林雨薇表示，水喝太少，除了宿便纏身......'
  },
  {
    id: 5,
    image: '/news/new5.png',
    title: '喝水不只可以保健，還能減肥?',
    date: '2023-10-01',
    content: '很多人為了要擁有完美好身材，會透過特殊、極端飲食方式，來達到瘦身效果，但是，其實只要身體有足夠水分，就能促成體內新陳代謝，進一步健康減重......'
  },
  {
    id: 6,
    image: '/news/new6.png',
    title: '喝水治百病！？補充水分好健康！',
    date: '2023-10-01',
    content: '常聽人說喝水好健康，喝水到底是對哪裡健康呢？人體有70%是水組成的，身體各個器官與系統都仰賴水分的補給才能維持基礎運作。喝水真的好處多多......'
  }
])
</script>
<style lang="scss" scoped>
@import '/assets/components/newsRank';
</style>
