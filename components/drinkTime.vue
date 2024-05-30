<template>
  <div class="drinkTime">
    <h6>補水最佳時機</h6>
    <div class="iconRank">
      <div class="icon" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
        <img src="/drinkTime/icon-1.png" alt="icon" />
        <p>起床後</p>
      </div>
      <div class="icon" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="1000" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
        <img src="/drinkTime/icon-2.png" alt="icon" />
        <p>工作前</p>
      </div>
      <div class="icon" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="1500" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
        <img src="/drinkTime/icon-3.png" alt="icon" />
        <p>午餐前</p>
      </div>
      <div class="icon" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="2000" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
        <img src="/drinkTime/icon-4.png" alt="icon" />
        <p>下午茶</p>
      </div>
      <div class="icon" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="2500" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
        <img src="/drinkTime/icon-5.png" alt="icon" />
        <p>晚餐後</p>
      </div>
      <div class="icon" data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="3000" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
        <img src="/drinkTime/icon-6.png" alt="icon" />
        <p>睡覺前</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
  AOS.init()
})
</script>
<style lang="scss" scoped>
@import '/assets/components/drinkTime';
</style>
