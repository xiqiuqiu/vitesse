<script>
export default {
  name: 'ImageWithFallback',
  props: {
    src: {
      type: String,
      required: true,
    },
    fallbackSrc: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'image',
    },
  },
  data() {
    return {
      currentSrc: this.src,
    }
  },
  watch: {
    src(newValue) {
      this.currentSrc = newValue
    },
  },
  methods: {
    handleError() {
      if (this.currentSrc !== this.fallbackSrc && this.fallbackSrc) {
        this.currentSrc = this.fallbackSrc
      }
      else {
        // 生成带有文本的占位图
        const text = encodeURIComponent(this.alt || 'Image')
        this.currentSrc = `https://via.placeholder.com/300x200.png?text=${text}`
      }
    },
  },
}
</script>

<template>
  <img
    :src="currentSrc"
    :alt="alt"
    v-bind="$attrs"
    @error="handleError"
  >
</template>
