<script>
// import LeftSidebar from './LeftSidebar.vue'
// import RightSidebar from './RightSidebar.vue'

export default {
  name: 'AppLayout',
  // components: {
  //   LeftSidebar,
  //   RightSidebar,
  // },
  props: {
    pageTitle: {
      type: String,
      default: '',
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showBackButton: {
      type: Boolean,
      default: true,
    },
    showRightSidebar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      sidebarCollapsed: false,
      submenuVisible: false,
      isMobile: false,
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    toggleSubmenu() {
      this.submenuVisible = !this.submenuVisible
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1024
    },
  },
}
</script>

<template>
  <div class="bg-gray-50 flex h-screen overflow-hidden">
    <!-- 左侧侧边栏 -->
    <LeftSidebar
      :collapsed="sidebarCollapsed"
      :submenu-visible="submenuVisible"
      @toggle-sidebar="toggleSidebar"
      @toggle-submenu="toggleSubmenu"
    />

    <!-- 主内容区 -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <!-- 顶部标题栏 -->
      <div
        v-if="showHeader"
        class="px-6 py-3 border-b border-gray-200 bg-white flex items-center"
      >
        <button
          v-if="showBackButton"
          class="text-gray-600 mr-4 transition-colors duration-200 hover:text-gray-800"
          @click="$router.back()"
        >
          <i class="fa-solid fa-arrow-left" />
        </button>
        <h1 class="text-lg text-gray-800 font-medium">
          {{ pageTitle }}
        </h1>
      </div>

      <!-- 插槽内容 -->
      <div class="flex-1 h-full overflow-y-auto">
        <slot />
      </div>
    </div>

    <!-- 右侧卡片展示区 -->
    <RightSidebar v-if="!isMobile && showRightSidebar" />
  </div>
</template>
