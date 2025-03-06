import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind4,
} from 'unocss'

export default defineConfig({
  // shortcuts: [
  //   ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  //   ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  // ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      'primary': '#1E6FFF',
      'primary-hover': '#4C58E0',
      'sidebar': '#f5f7fa',
      'card-bg': '#ffffff',
      // 智能体广场页面特有颜色
      'agent-primary': '#1E6FFF', // 这里定义了 agent-primary 颜色
      'agent-primary-hover': '#0055E6',
      'card-hover': 'rgba(30, 111, 255, 0.05)',
      // 聊天相关颜色
      'chat-bubble-user': '#EBF2FF', // 用户消息气泡背景色
      'chat-bubble-ai': '#FFFFFF', // AI消息气泡背景色
      'chat-text-user': '#1A1A1A', // 用户消息文本颜色
      'chat-text-ai': '#1A1A1A', // AI消息文本颜色
    },
    boxShadow: {
      'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
      'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      // 智能体广场页面特有阴影
      'agent-card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      'agent-card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
      // 聊天输入框阴影
      'chat-input': '0 1px 3px rgba(0, 0, 0, 0.05)',
      'chat-input-focus': '0 0 0 3px rgba(91, 103, 234, 0.3)',
    },
  },
  shortcuts: {
    'hover-scale': 'transition-transform duration-200 hover:scale-103',
    'hover-shadow': 'transition-shadow duration-200 hover:shadow-card-hover',
    'focus-input': 'focus:shadow-chat-input-focus focus:border-primary',
    'submenu-item': 'transition-all duration-200 hover:bg-gray-100 hover:pl-6',
    // 智能体广场页面特有快捷方式
    'card-transition': 'transition-all duration-250',
    'nav-item': 'relative transition-bg-color duration-200 hover:bg-agent-primary-008',
    'nav-item-active': 'bg-agent-primary-008',
    // 聊天相关快捷方式
    'chat-container': 'max-w-3xl w-full mx-auto',
    'user-message-bubble': 'bg-chat-bubble-user rounded-lg p-4 text-chat-text-user',
    'ai-message-bubble': 'bg-chat-bubble-ai rounded-lg p-4 text-chat-text-ai',
    'message-input': 'w-full px-4 py-3 border-none outline-none resize-none text-gray-700 min-h-[100px] focus:shadow-chat-input-focus',
  },
})
