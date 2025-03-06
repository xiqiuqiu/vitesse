<script>
export default {
  name: 'LeftSidebar',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    submenuVisible: {
      type: Boolean,
      default: false,
    },
    submenuTitle: {
      type: String,
      default: '模型服务',
    },
  },
  emits: ['toggleSidebar', 'toggleSubmenu'],
  data() {
    return {
      menuItems: [
        { title: '新对话', path: '/home', icon: 'fa-home' },
        { title: '智能体广场', path: '/zhinengti', icon: 'fa-bullhorn' },
        { title: '开发者中心', path: '/developer', icon: 'fa-code-branch' },
        { title: '智能工坊', path: '/workshop', icon: 'fa-wrench' },
        { title: '教学培训', path: '/jiaoxuepeixun', icon: 'fa-graduation-cap' },
      ],
      submenuItems: [
        { title: '模型广场', path: '/model-plaza' },
        { title: '资源管理', path: '/resource-management' },
      ],
    }
  },
}
</script>

<template>
  <div
    class="border-r border-gray-200 bg-sidebar flex flex-col h-screen transition-width duration-300"
    :class="{ 'w-16': collapsed, 'w-56': !collapsed }"
  >
    <!-- 顶部logo区域 -->
    <div class="p-4 flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="rounded-full bg-blue-100 flex h-8 w-8 items-center justify-center"
        >
          <i class="fa-solid fa-earth-asia text-blue-500" />
        </div>
        <span
          class="text-gray-700 font-medium ml-2 transition-opacity duration-200"
          :class="{ 'opacity-0 hidden': collapsed }"
        >校园数智平台</span>
      </div>
      <button
        class="text-gray-400 hover:text-gray-600"
        @click="$emit('toggleSidebar')"
      >
        <i class="fa-solid fa-bars" />
      </button>
    </div>

    <!-- 导航菜单 -->
    <div class="py-2 flex-1 overflow-y-auto">
      <nav class="px-2 space-y-1">
        <!-- 菜单项 -->
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="group text-sm font-medium px-4 py-3 rounded-md flex items-center nav-item"
          :class="[
            $route.path === item.path
              ? 'active text-agent-primary'
              : 'text-gray-600',
          ]"
        >
          <i :class="`fa-solid ${item.icon} mr-3 ${$route.path === item.path ? 'text-agent-primary' : 'text-gray-500'}`" />
          <span :class="{ 'opacity-0 hidden': collapsed }" class="transition-opacity duration-200">{{ item.title }}</span>
        </router-link>

        <!-- 折叠菜单 -->
        <div v-if="submenuItems.length > 0" class="space-y-1">
          <button
            type="button"
            class="focus:outline-none text-sm text-gray-600 font-medium px-4 py-3 rounded-md flex w-full items-center justify-between"
            @click="$emit('toggleSubmenu')"
          >
            <div class="flex items-center">
              <i class="fa-solid fa-cube text-gray-500 mr-3" />
              <span :class="{ 'opacity-0 hidden': collapsed }" class="transition-opacity duration-200">{{ submenuTitle }}</span>
            </div>
            <i
              :class="[
                submenuVisible ? 'fa-chevron-up' : 'fa-chevron-down',
                { 'opacity-0 hidden': collapsed },
              ]"
              class="fa-solid text-gray-400 transition-opacity duration-200"
            />
          </button>

          <!-- 子菜单 -->
          <div
            class="submenu pl-10 space-y-1"
            :class="{ open: submenuVisible && !collapsed }"
          >
            <router-link
              v-for="subItem in submenuItems"
              :key="subItem.path"
              :to="subItem.path"
              class="text-sm text-gray-500 py-2 block transition-colors duration-200 hover:text-agent-primary"
            >
              {{ subItem.title }}
            </router-link>
          </div>
        </div>
      </nav>
    </div>

    <!-- 底部登录区 -->
    <div class="p-4 border-t border-gray-200">
      <button
        class="text-sm text-blue-600 flex transition-colors duration-200 items-center hover:text-blue-800"
      >
        <i class="fa-solid fa-arrow-right-to-bracket mr-2" />
        <span :class="{ 'opacity-0 hidden': collapsed }" class="transition-opacity duration-200">登录</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 导航项目悬停效果 */
.nav-item {
  position: relative;
  transition: background-color 0.2s;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 0;
  width: 3px;
  background-color: #1e6fff;
  transition: height 0.2s;
}

.nav-item:hover::after,
.nav-item.active::after {
  height: 16px;
}

.nav-item:hover,
.nav-item.active {
  background-color: rgba(30, 111, 255, 0.08);
}

/* 子菜单动画 */
.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.submenu.open {
  max-height: 500px;
}
</style>
