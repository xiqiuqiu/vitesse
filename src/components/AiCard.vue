<script>
export default {
  name: 'AiCard',
  props: {
    card: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
}
</script>

<template>
  <div
    class="fade-in-up shadow-agent-card hover:shadow-agent-card-hover rounded-lg bg-white opacity-0 cursor-pointer card-transition overflow-hidden"
    :class="[`stagger-${index % 5 + 1}`]"
    :style="{
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
      boxShadow: isHovered
        ? '0 4px 12px rgba(0, 0, 0, 0.12)'
        : '0 2px 8px rgba(0, 0, 0, 0.08)',
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="h-40 overflow-hidden">
      <ImageWithFallback
        :src="card.image"
        :alt="card.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-3">
      <h3 class="text-sm text-gray-800 font-medium mb-1">
        {{ card.title }}
      </h3>
      <p class="text-xs text-gray-500">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card-transition {
  transition: all 0.25s ease;
}

/* 卡片渐入动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.4s ease forwards;
}
</style>
