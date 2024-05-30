<template>
  <!-- //bubbleCompoment -->
  <div class="bubbleCompoment">
    <img src="/default/bubbleBg.png" class="gt-sm" />
    <img src="/default/bubbleBgApp.png" class="lt-md" />
    <div class="absolute-center custom-caption">
      <!-- <div class="text-white alight-center customText2">
          <h5>
            <span v-for="(char, index) in firstTextArray" :key="'first-' + index" class="char">{{ char }}</span>
          </h5>
          <h5>
            <span v-for="(char, index) in secondTextArray" :key="'second-' + index" class="char">{{ char }}</span>
          </h5>
        </div> -->
    </div>
    <div v-for="bubble in bubblesMobile" :key="bubble.id" class="mo xs" :style="{ top: `${bubble.position.top}%`, left: `${bubble.position.left}%` }">
      <img :src="bubble.imageSource" :alt="'Bubble ' + bubble.id" :style="{ width: `${bubble.width}%` }" ref="bubblesRefsMobile" />
    </div>
    <div v-for="bubble in bubblesTablet" :key="bubble.id" class="mo sm" :style="{ top: `${bubble.position.top}%`, left: `${bubble.position.left}%` }">
      <img :src="bubble.imageSource" :alt="'Bubble ' + bubble.id" :style="{ width: `${bubble.width}%` }" ref="bubblesRefsTablet" />
    </div>
    <div v-for="bubble in bubblesDesktop" :key="bubble.id" class="mo md" :style="{ top: `${bubble.position.top}%`, left: `${bubble.position.left}%` }">
      <img :src="bubble.imageSource" :alt="'Bubble ' + bubble.id" :style="{ width: `${bubble.width}%` }" ref="bubblesRefsDesktop" />
    </div>
    <div v-for="bubble in bubblesDesktop2" :key="bubble.id" class="mo lg" :style="{ top: `${bubble.position.top}%`, left: `${bubble.position.left}%` }">
      <img :src="bubble.imageSource" :alt="'Bubble ' + bubble.id" :style="{ width: `${bubble.width}%` }" ref="bubblesRefsDesktop2" />
    </div>
    <div v-for="bubble in bubblesDesktop3" :key="bubble.id" class="mo xl" :style="{ top: `${bubble.position.top}%`, left: `${bubble.position.left}%` }">
      <img :src="bubble.imageSource" :alt="'Bubble ' + bubble.id" :style="{ width: `${bubble.width}%` }" ref="bubblesRefsDesktop3" />
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" @click="scrollToTop" class="scroll-to-top-button">
    <path
      d="M30 60C13.4591 60 0 46.5421 0 29.9973C0 13.4526 13.4591 0 30 0C46.5409 0 60 13.4579 60 29.9973C60 46.5367 46.5409 59.9947 30 59.9947V60ZM30 3.20427C15.227 3.20427 3.20456 15.2256 3.20456 29.9973C3.20456 44.769 15.227 56.7904 30 56.7904C44.773 56.7904 56.7954 44.769 56.7954 29.9973C56.7954 15.2256 44.7784 3.20427 30 3.20427Z"
      fill="#1DBBEE"
      fill-opacity="0.5" />
    <path
      d="M38.5884 22.6544L30.812 15.9522C30.1978 15.4234 29.2792 15.4341 28.681 15.9842L21.3746 22.6865C20.723 23.2846 20.6803 24.2993 21.2785 24.9508C21.8767 25.6024 22.8915 25.6451 23.543 25.0469L28.1629 20.8066V42.836C28.1629 43.7225 28.8786 44.4381 29.7652 44.4381C30.6518 44.4381 31.3675 43.7225 31.3675 42.836V20.6571L36.4948 25.079C36.7992 25.3407 37.1678 25.4688 37.5416 25.4688C37.9903 25.4688 38.4389 25.2819 38.754 24.9134C39.3308 24.2459 39.2561 23.2312 38.5884 22.6544Z"
      fill="#1DBBEE"
      fill-opacity="0.5" />
  </svg>
</template>
<script setup>
import { gsap } from 'gsap'

const bubblesMobile = reactive([])
const bubblesTablet = reactive([])
const bubblesDesktop = reactive([])
const bubblesDesktop2 = reactive([])
const bubblesDesktop3 = reactive([])
const bubblesRefsMobile = ref([])
const bubblesRefsTablet = ref([])
const bubblesRefsDesktop = ref([])
const bubblesRefsDesktop2 = ref([])
const bubblesRefsDesktop3 = ref([])

const firstText = '我們追求的，不僅僅是賣水，'
const secondText = '更是將自然的美好帶給大眾。'
const firstTextArray = Array.from(firstText)
const secondTextArray = Array.from(secondText)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 使用平滑滚动
  })
}

let animations = [] // 保存所有的動畫，以便在onUnmounted中清除

const createBubbles = (bubbleArray, maxWidth, maxRiseHeight) => {
  const numBubbles = Math.floor(Math.random() * 21) + 20
  for (let i = 0; i < numBubbles; i++) {
    const bubble = {
      id: i,
      imageSource: `/index/${Math.floor(Math.random() * 22) + 1}.png`,
      width: Math.random() * maxWidth,
      riseHeight: Math.random() * maxRiseHeight,
      riseTime: Math.random() * 2 + 1,
      position: {
        top: 100,
        left: Math.random() * 97
      }
    }
    bubbleArray.push(bubble)
  }
}

watchEffect(() => {
  if (bubblesRefsMobile.value.length) {
    bubblesRefsMobile.value.forEach((bubbleRef, i) => {
      const startBubbleY = bubbleRef.getBoundingClientRect().top - window.scrollY
      animateBubble(bubbleRef, startBubbleY, -bubblesMobile[i].riseHeight, bubblesMobile[i].riseTime)
    })
  }

  if (bubblesRefsTablet.value.length) {
    bubblesRefsTablet.value.forEach((bubbleRef, i) => {
      const startBubbleY = bubbleRef.getBoundingClientRect().top - window.scrollY
      animateBubble(bubbleRef, startBubbleY, -bubblesTablet[i].riseHeight, bubblesTablet[i].riseTime)
    })
  }

  if (bubblesRefsDesktop.value.length) {
    bubblesRefsDesktop.value.forEach((bubbleRef, i) => {
      const startBubbleY = bubbleRef.getBoundingClientRect().top - window.scrollY
      animateBubble(bubbleRef, startBubbleY, -bubblesDesktop[i].riseHeight, bubblesDesktop[i].riseTime)
    })
  }
  if (bubblesRefsDesktop2.value.length) {
    bubblesRefsDesktop2.value.forEach((bubbleRef, i) => {
      const startBubbleY = bubbleRef.getBoundingClientRect().top - window.scrollY
      animateBubble(bubbleRef, startBubbleY, -bubblesDesktop2[i].riseHeight, bubblesDesktop2[i].riseTime)
    })
  }
  if (bubblesRefsDesktop3.value.length) {
    bubblesRefsDesktop3.value.forEach((bubbleRef, i) => {
      const startBubbleY = bubbleRef.getBoundingClientRect().top - window.scrollY
      animateBubble(bubbleRef, startBubbleY, -bubblesDesktop3[i].riseHeight, bubblesDesktop3[i].riseTime)
    })
  }
})

const animateBubble = (element, startY, breakY, riseTime) => {
  const animation = gsap.timeline({ onComplete: () => animateBubble(element, startY, breakY, riseTime) })

  animation.fromTo(element, { x: '-10px' }, { x: '10px', duration: riseTime, ease: 'sine.inOut', repeat: 2, yoyo: true })
  animation.to(element, { y: `${breakY}px`, duration: riseTime, ease: 'sine.inOut', repeat: 3 }, '<')
  animation.add(() => {
    element.src = '/index/2.png'
  })
  animation.add(() => {
    if (element.getBoundingClientRect().top - window.scrollY <= breakY) {
      // Execute break effect operations, such as replacing image or adding class
    }
  })
  animation.to(element, { opacity: 0, duration: 0.5, onComplete: () => restartAnimation(element, startY) })

  animations.push(animation)
}

const restartAnimation = (element, startY) => {
  element.src = '/index/22.png'
  gsap.set(element, { y: '0px', x: '0px' })
  gsap.to(element, { opacity: 0.8, duration: 0.5 })
}
onMounted(() => {
  createBubbles(bubblesMobile, 50, 450)
  createBubbles(bubblesTablet, 60, 895)
  createBubbles(bubblesDesktop, 100, 330)
  createBubbles(bubblesDesktop2, 100, 356)
  createBubbles(bubblesDesktop3, 100, 556)

  // const charAnim = gsap.from('.char', {
  //   opacity: 0,
  //   y: -20,
  //   scale: 1.5,
  //   duration: 1,
  //   stagger: 0.2
  // })
  // animations.push(charAnim)
})

// 在onUnmounted中清除所有动画
onUnmounted(() => {
  animations.forEach(anim => anim.kill())
})
</script>
<style lang="scss" scoped>
@import '/assets/components/bubble';
</style>
