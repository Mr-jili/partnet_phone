import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './assets/css/common.scss'
import './style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
    locale: zhCn
})
app.mount('#app')
