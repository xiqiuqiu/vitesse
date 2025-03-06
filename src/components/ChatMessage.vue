<script>
export default {
  name: 'ChatMessage',
  props: {
    content: {
      type: String,
      default: '',
    },
    isUser: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'DeepSeek',
    },
    avatarSrc: {
      type: String,
      default: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    showName: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div
    class="fade-in mb-6" :class="[
      isUser ? 'flex justify-end' : 'flex items-start space-x-4',
    ]"
  >
    <template v-if="!isUser">
      <div class="rounded-full bg-blue-100 flex flex-shrink-0 h-10 w-10 items-center justify-center">
        <ImageWithFallback
          :src="avatarSrc"
          :alt="name"
          class="rounded-full h-8 w-8 object-cover"
        />
      </div>
      <div class="flex-1">
        <div v-if="showName" class="text-sm text-gray-700 font-medium mb-1">
          {{ name }}
        </div>
        <div class="text-gray-800 p-2 text-left rounded-lg bg-gray-100">
          <slot>{{ content }}</slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="max-w-[80%]">
        <div class="p-4 rounded-lg bg-blue-50">
          <p class="text-gray-800">
            <slot>{{ content }}</slot>
          </p>
        </div>
      </div>
    </template>
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
