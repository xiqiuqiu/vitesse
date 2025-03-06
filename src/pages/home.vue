<script>
export default {
  name: 'HomePage',
  data() {
    return {
      userInput: '',
      messages: [],
    }
  },
  methods: {
    sendMessage(message) {
      // 添加用户消息
      this.messages.push({
        content: message,
        isUser: true,
      })

      // 滚动到底部
      this.$nextTick(() => {
        this.scrollToBottom()
      })

      // 模拟AI回复
      setTimeout(() => {
        this.messages.push({
          content: '我已收到您的消息，正在为您处理...',
          isUser: false,
        })

        // 滚动到底部
        this.$nextTick(() => {
          this.scrollToBottom()
        })
      }, 500)
    },
    scrollToBottom() {
      const scrollArea = document.querySelector('.flex-1.overflow-y-auto')
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight
      }
    },
  },
}
</script>

<template>
  <AppLayout page-title="" :show-header="false">
    <!-- 主内容区 -->
    <div class="flex flex-1 flex-col min-h-screen items-center justify-center">
      <!-- 聊天容器 -->
      <div class="max-w-3xl w-full">
        <!-- 顶部欢迎消息 -->
        <WelcomeMessage
          title="你好，我是DeepSeek，很高兴见到你！"
          subtitle="来自 DeepSeek，知识库涵盖【更 Extra 模型、Shell + Linux 等内容】"
        />

        <!-- 聊天消息 -->
        <ChatMessage
          v-for="(message, index) in messages"
          :key="index"
          :content="message.content"
          :is-user="message.isUser"
        />
      </div>

      <!-- 输入区域 -->
      <ChatInput
        v-model:value="userInput"
        @send="sendMessage"
      />
    </div>

    <!-- 页脚信息 -->
    <div
      class="text-xs text-gray-400 text-center w-full hidden bottom-2 absolute md:block"
    >
      <p>©Powered by 深度搜索 | cs.chat@qq.com.cn | 公司</p>
    </div>
  </AppLayout>
</template>
