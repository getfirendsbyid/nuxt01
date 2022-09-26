import Naive from "naive-ui";
import 'ant-design-vue/dist/antd.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Naive)
})
