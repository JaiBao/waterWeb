<template>
  <div class="bird bg-light-blue">
    <q-btn class="button">
      <div :class="{ head: true, nod: isPecking }">
        <p>SB</p>
        <div class="beak"></div>
        <div class="eye"></div>
      </div>

      <div v-for="(grainPosition, index) in grains" :key="index" :class="['grain', { eat: index <= grainEaten }]" :style="{ left: `${grainPosition}%` }"></div>
    </q-btn>
  </div>
</template>

<script setup>
const isPecking = ref(false)
let peckCount = 0
let grainEaten = null
const grains = ref([])

const peck = () => {
  // 生成固定位置的米粒
  grains.value = [30, 50, 70]

  peckCount = 0
  grainEaten = -1 // 照順序第一個開始
  let peckingInterval = setInterval(() => {
    isPecking.value = !isPecking.value
    if (isPecking.value) {
      if (grainEaten < grains.value.length - 1) {
        grainEaten++ // 吃下一粒米
      }
    }

    peckCount++
    if (peckCount === grains.value.length * 2) {
      clearInterval(peckingInterval)
      isPecking.value = false
    }
  }, 300)
}
onMounted(peck)
</script>
<style lang="scss" scoped>
.bird {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 4000;
  .button {
    // border: 1px solid black;
    border-radius: 100%;
    padding: 2%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.09);
    background: #b2b2b2;
    position: relative;
  }
  .head {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: white;
    border-top: 5px solid black; // 上方的黑色圓弧線條
    border-bottom: 5px solid black; // 下方的黑色圓弧線條
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;

    &.nod {
      transform: rotate(10deg); // 點頭動畫，根據需求調整角度
    }

    .beak {
      position: absolute;
      right: -40px;
      top: 40px;
      width: 40px;
      height: 20px;
      background-color: black;
      border-left: 5px solid black; // 嘴巴的三角形
      clip-path: polygon(0% 0%, 0% 70%, 50% 60%);
    }

    .eye {
      position: absolute;
      right: 30px;
      top: 20px;
      width: 10px;
      height: 10px;
      background-color: black; // 眼睛的黑色
      border-radius: 50%;
    }
  }
  .grain {
    position: absolute;
    top: 87%;
    left: 50%;
    transform: translateY(-50%); // 垂直居中
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
    &.eat {
      top: 80%; /* 米粒被吃時的位置 */
      opacity: 0; /* 米粒被吃後消失 */
    }
  }
}
</style>
