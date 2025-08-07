import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const vue = await import('@vitejs/plugin-vue')
  return {
    plugins: [vue.default()],
  }
})
