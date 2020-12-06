export default {
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'edu教育',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: '猿编程携手AI领域屡获大奖的明星教研团队和来自国内外顶尖学府的师资团队，利用猿辅导超4亿学生的学习行为数据，打造出更科学的少儿编程课程体系，全方位培养孩子的思维能力，做未来时代的领跑者。' },
      { hid: 'keyword', name: 'keyword', content: '在线教育 猿编程、猿辅导少儿编程、猿辅导编程' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {color: '#fff' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    'swiper/swiper-bundle.css',
    '@/assets/styles/resets.css',
    '@/assets/styles/common.css',
    '@/assets/styles/iconfont.css',
    '@/assets/styles/ui.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '@/plugins/element-ui', mode: 'client'},
    { src: '@/plugins/vue-awesome-swiper'},
    { src: '@/plugins/vue-lazyload', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
