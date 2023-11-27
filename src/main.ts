import { createApp } from "vue";
import "./style.less";

import App from "./App.tsx";
import { router } from "./router/index.ts";

import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

createApp(App).use(router).use(ElementPlus, { locale: zhCn }).mount("#app");
