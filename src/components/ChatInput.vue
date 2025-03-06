<script>
export default {
  name: 'ChatInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '给 DeepSeek 发送消息（按 Enter 提交，Shift + Enter 换行）',
    },
  },
  emits: ['update:value', 'send'],
  data() {
    return {
      inputValue: this.value,
    }
  },
  watch: {
    value(newVal) {
      this.inputValue = newVal
    },
    inputValue(newVal) {
      this.$emit('update:value', newVal)
    },
  },
  methods: {
    adjustTextareaHeight() {
      const textarea = this.$refs.textareaInput
      textarea.style.height = 'auto'
      textarea.style.height
        = `${textarea.scrollHeight < 200 ? textarea.scrollHeight : 200}px`
    },
    handleKeydown(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        this.onSend()
      }
    },
    onSend() {
      if (this.inputValue.trim()) {
        this.$emit('send', this.inputValue)
        this.inputValue = ''
        this.$refs.textareaInput.style.height = 'auto'
      }
    },
    focus() {
      this.$refs.textareaInput.focus()
    },
  },
}
</script>

<template>
  <div class="p-4 border-gray-200 bg-white flex max-w-3xl w-full justify-center">
    <div class="max-w-3xl w-full">
      <div class="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
        <textarea
          ref="textareaInput"
          v-model="inputValue"
          class="outline-none outline-none text-gray-700 px-4 py-3 border-none min-h-[100px] w-full resize-none"
          :placeholder="placeholder"
          @input="adjustTextareaHeight"
          @keydown="handleKeydown"
        />

        <div class="px-4 py-2 border-t border-gray-100 flex items-center justify-between">
          <div class="flex space-x-4">
            <slot name="actions">
              <!-- 默认操作按钮 -->
              <button class="text-sm text-gray-500 flex transition-colors duration-200 items-center hover:text-blue-500">
                <i class="fa-solid fa-globe mr-1.5" />
                <span>网络搜索</span>
              </button>
              <button class="text-sm text-gray-500 flex transition-colors duration-200 items-center hover:text-blue-500">
                <i class="fa-solid fa-brain mr-1.5" />
                <span>深度思考(R1)</span>
              </button>
            </slot>
          </div>
          <button
            class="hover-scale text-white rounded-full bg-blue-500 flex h-10 w-10 transition-colors items-center justify-center hover:bg-blue-600"
            @click="onSend"
          >
            <i class="fa-solid fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-scale {
  transition: transform 0.2s ease;
}
.hover-scale:hover {
  transform: scale(1.03);
}
</style>
