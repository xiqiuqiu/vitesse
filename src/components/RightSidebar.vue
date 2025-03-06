<script>
export default {
  name: 'RightSidebar',
  props: {
    title: {
      type: String,
      default: '公告',
    },
    cards: {
      type: Array,
      default: () => [
        {
          image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '模型平台DeepSeek',
        },
        {
          image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'DeepSeek内容创作秘籍：探索写作与案例分析',
        },
        {
          image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: 'DeepSeek内容创作秘籍：探索写作与案例分析',
        },
        {
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          title: '案例展示',
        },
      ],
    },
  },
}
</script>

<template>
  <div
    class="border-l border-gray-200 bg-white w-72 overflow-y-auto"
  >
    <div class="p-4">
      <h2 class="text-lg text-gray-700 font-medium mb-4">
        {{ title }}
      </h2>

      <!-- 右侧卡片 -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="shadow-agent-card hover:shadow-agent-card-hover mb-6 rounded-lg transition-shadow duration-200 overflow-hidden"
      >
        <ImageWithFallback
          :src="card.image"
          :alt="card.title"
          class="h-32 w-full object-cover"
        />
        <div class="p-3">
          <p class="text-xs text-gray-500">
            {{ card.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
