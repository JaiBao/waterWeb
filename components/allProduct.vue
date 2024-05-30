<template>
  <div class="allProduct">
    <div class="sectionTitle">
      <img src="/index/titleIcon.png" alt="標題圖標" />
      <h6>商品一覽</h6>
    </div>

    <div class="rankCards">
      <q-card class="rankCard" style="box-shadow: 0 0 0 #ccc" v-for="(slide, index) in displayedSlides" :key="index">
        <img :src="slide.card.image" />
        <q-card-section>
          <div class="rankCardText">{{ slide.card.name }}</div>
        </q-card-section>
        <q-card-section>
          <button @click="openDialog(slide)">詳細資訊</button>
        </q-card-section>
      </q-card>
    </div>
    <!-- 分頁器 -->
    <q-pagination
      v-model="currentPage"
      :max="totalPages"
      class="row justify-center q-ma-md round-10 lt-md"
      outline
      color="grey-10"
      active-design="outline"
      active-color="grey-10"
      gutter="10px"
      active-text-color="pink-8" />
  </div>

  <!-- Dialog部分 -->
  <q-dialog v-model="isDialogOpen">
    <q-card class="selectedDialog">
      <!-- 新增的關閉按鈕 -->
      <q-btn
        flat
        dense
        round
        icon="close"
        color="white"
        class="close-dialog-button"
        @click="isDialogOpen = false"
        :style="{ backgroundColor: '#787878', borderColor: 'white' }" />
      <div class="dialogContainer">
        <div class="dialogTitle">
          <h6>{{ selectedSlide.card.name }}</h6>
        </div>
        <div class="dialogImg">
          <img :src="selectedSlide.dialog.image" alt="Slide Image" />
        </div>

        <div class="dailogBottom">
          <div class="dialogMl">{{ selectedSlide.dialog.text.bigml }}</div>
          <div class="dialogSpan">{{ selectedSlide.dialog.text.bigSpan }}</div>
        </div>
        <div class="dailogBottom">
          <div class="dialogMl">{{ selectedSlide.dialog.text.smml }}</div>
          <div class="dialogSpan">{{ selectedSlide.dialog.text.smSpan }}</div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
const isMobile = ref(false)
const imagePaths = []
const dialogImages = []

const currentPage = ref(1)
let itemsPerPage = ref(5)

const handleWindowResize = () => {
  if (window.innerWidth > 1024) {
    itemsPerPage.value = slides.value.length
    // console.log(itemsPerPage.value)
  }
}
const totalPages = computed(() => Math.ceil(slides.value.length / itemsPerPage.value))

const displayedSlides = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return slides.value.slice(startIndex, endIndex)
})

watch(currentPage, () => {
  nextTick(() => {
    window.scrollTo({ top: 900, behavior: 'smooth' })
  })
})

onMounted(() => {
  handleWindowResize()

  window.addEventListener('resize', handleWindowResize)
})

// 在组件卸载之前移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleWindowResize)
})
for (let i = 1; i <= 14; i++) {
  imagePaths.push(`/allProduct/product${i}.jpg`)
}

for (let i = 1; i <= 14; i++) {
  dialogImages.push(`/productDialog/dialog${i}.jpg`)
}
const productNames = [
  '世間水 WORLD WATER',
  '冰川黃金竹炭水',
  '冰川天然水',
  '快感純淨水',
  '快感竹炭水',
  '夏日之泉SUMMER WATER',
  '金竹竹炭水',
  '森淋泉經炭水',
  '經炭竹炭水',
  '康力世天然水 CANLES WATER',
  '按個讚竹炭水',
  '尚讚竹炭水',
  '竹讚竹炭水',
  '金讚竹炭水'
]
const slides = ref(
  imagePaths.map((path, index) => ({
    card: {
      image: path,
      name: productNames[index % productNames.length]
    },
    dialog: {
      title: productNames[index % productNames.length],
      image: dialogImages[index % dialogImages.length],
      text: {
        bigml: '大水1450ml',
        bigSpan: '12入',
        smml: '小水600ml',
        smSpan: '24入'
      }
    }
  }))
)

const isDialogOpen = ref(false)

const selectedSlide = ref(null)

const openDialog = slide => {
  selectedSlide.value = slide
  isDialogOpen.value = true
}
</script>
<style lang="scss" scoped>
@import 'assets/components/allProduct';
</style>
