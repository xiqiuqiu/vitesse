<script>
export default {
  name: 'ZhiNengTiRefactored',
  // components: {
  //   AppLayout,
  //   AiCard,
  // },
  data() {
    return {

    }
  },
}
</script>

<template>
  <AppLayout page-title="开发者中心">
    <!-- 顶部banner区域 -->
    <div class="bg-gradient-to-r text-white p-6 w-full relative relative from-blue-500 to-blue-600">
      <div class="mx-auto flex max-w-6xl items-center justify-between">
        <div class="flex w-1/2 justify-end">
          <!-- <img
                src="https://source.unsplash.com/random/400x200/?robot,ai"
                alt="DeepSeek模型"
                class="h-36 object-contain"
              /> -->
        </div>
      </div>
    </div>

    <!-- 智能体卡片网格 -->
    <div class="max-w-8xl mx-auto p-6">
      <!-- 公共底部 -->
      <div class="text-xs text-gray-400 mt-10 pt-4 text-center border-t border-gray-200">
        <p>©Powered by 深度搜索 | cs.chat@qq.com.cn | 公司</p>
      </div>
    </div>
  </AppLayout>
</template>
