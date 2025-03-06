import ImageWithFallback from '../composables/ImageWithFallback.vue'

export default {
  install(app) {
    // 全局注册图片加载失败处理组件
    app.component('ImageWithFallback', ImageWithFallback)
  },
}
