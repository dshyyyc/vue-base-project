import { createApp } from "vue";
import { Button } from "vant";
import "lib-flexible/flexible"; // 移动端适配
import App from "./App.vue";
import router from "@/router";
import "./style.css";
import "@/common/style/theme.css"; // 主题色

// 初始化 Vue 实例
const app = createApp(App);
// 注册路由
app.use(router);
// 注册组件
app.use(Button);
// 挂载 Vue 实例
app.mount("#app");
