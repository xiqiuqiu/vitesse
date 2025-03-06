<script>
export default {
  name: 'WelcomeMessage',
  props: {
    title: {
      type: String,
      default: '你好，我是DeepSeek，很高兴见到你！',
    },
    subtitle: {
      type: String,
      default: '来自 DeepSeek，知识库涵盖【更 Extra 模型、Shell + Linux 等内容】',
    },
    avatarSrc: {
      type: String,
      default: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  },
}
</script>

<template>
  <div class="fade-in mb-6 flex items-start space-x-4">
    <div
      class="rounded-full bg-blue-100 flex flex-shrink-0 h-10 w-10 items-center justify-center"
    >
      <ImageWithFallback
        :src="avatarSrc"
        :alt="title"
        class="rounded-full h-8 w-8 object-cover"
      />
    </div>
    <div class="flex-1">
      <div class="text-xl text-gray-800 font-medium text-left">
        {{ title }}
      </div>
      <div class="text-sm text-gray-500 mt-1 text-left">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease forwards;
}
</style>
