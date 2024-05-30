// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtagId: 'G-H603M7DMBT',
      gtmId: 'GTM-W8VL4S7T'
    }
  },
  head: {
    title: '水泉水生技｜瓶裝水經銷零售、瓶裝水代工',
    meta: [
      {
        name: 'description',
        content:
          '源於「水泉水」對生活的熱愛和對大自然的敬畏！擁有ISO 22000 與 HACCP 國家級雙重認證水廠，提供最純淨水源的瓶裝水，業界高品質瓶裝水！世間水、快感涵氧活水、快感竹炭水、冰川涵氧活水、冰川竹炭水、經炭水、金讚竹炭水、竹讚竹炭水、按個讚竹炭水、金竹竹炭水、尚讚竹炭水'
      },

      { name: 'google-site-verification', content: 'LuY-R48YMOEGA7TIXFfcuFHbA7OV-Narkw8-G4La-Ek' }
    ]
  },
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', 'nuxt-simple-sitemap', 'vue3-carousel-nuxt', '@pinia/nuxt', '@nuxt/image'],
  css: ['~/assets/global.scss'],

  quasar: {
    plugins: ['Notify']
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/worldProduct', '/world', '/news', '/glacierProduct', '/about', '/allProduct', 'sitemap.xml'],
      ignore: []
    }
  },

  site: {
    url: 'https://www.springwater.tw'
  }
})
