<script>
export default {
  name: 'ZhiNengTiRefactored',
  // components: {
  //   AppLayout,
  //   AiCard,
  // },
  data() {
    return {
      aiCards: [
        {
          id: 1,
          title: 'AI校园',
          description: '大学专属智能体，为小助手解答问题',
          image: './src/static/aixiaoyuan.jpg',
        },
        {
          id: 2,
          title: '数字法律助手',
          description: '数字法律知识服务',
          image: './src/static/falvzhushou.jpg',
        },
        {
          id: 3,
          title: 'AI科学家',
          description: 'AI科学家',
          image: './src/static/kexuejia.jpg',
        },
        {
          id: 4,
          title: '新生小助手',
          description: '帮助新生掌握校园资讯',
          image: './src/static/xinsheng.jpg',
        },
        {
          id: 5,
          title: '出题助手',
          description: '帮助校长和老师出题生成',
          image: './src/static/chuti.jpg',
        },
        {
          id: 6,
          title: '数字人文科研助手',
          description: '为数字人文科研团队提供文本读题量服务',
          image: './src/static/shuzirenwen.jpg',
        },
        {
          id: 7,
          title: 'MBTI测试',
          description: '精准判断你的MBTI人格类型',
          image: './src/static/mbti.jpg',
        },
        {
          id: 8,
          title: 'AICCAD',
          description: '你的三维建模助手',
          image: './src/static/aicad.jpg',
        },
        {
          id: 9,
          title: 'VODO',
          description: '创意三维数字角色设计专家',
          image: './src/static/pidai.jpg',
        },
        {
          id: 10,
          title: 'ETALK',
          description: 'ETALK',
          image: './src/static/etalk.jpg',
        },
      ],
    }
  },
  methods: {
    theCardOnClick(id) {
      console.warn('theCardOnClick', id)
    },
  },
}
</script>

<template>
  <AppLayout page-title="智能体广场">
    <!-- 顶部banner区域 -->
    <div class="bg-gradient-to-r text-white p-6 w-full relative relative from-blue-500 to-blue-600">
      <div class="mx-auto flex max-w-6xl items-center justify-between">
        <div class="w-1/2">
          <h2 class="text-2xl font-bold mb-2">
            现已支持DeepSeek最新模型
          </h2>
          <p class="text-blue-100 mb-4">
            您可以体验DeepSeek最新模型
          </p>
          <button class="text-blue-600 font-medium px-5 py-2 rounded-md bg-white flex items-center hover:bg-blue-50">
            立即创建
            <i class="fa-solid fa-arrow-right ml-2" />
          </button>
        </div>
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
      <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5">
        <!-- 使用v-for循环渲染卡片 -->
        <AiCard
          v-for="(card, index) in aiCards" :key="card.id" :card="card" :index="index"
          @click="theCardOnClick(card.id)"
        />
      </div>

      <!-- 公共底部 -->
      <div class="text-xs text-gray-400 mt-10 pt-4 text-center border-t border-gray-200">
        <p>©Powered by 深度搜索 | cs.chat@qq.com.cn | 公司</p>
      </div>
    </div>
  </AppLayout>
</template>
