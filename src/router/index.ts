import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/page"),
    },
    {
      path: "/passport",
      name: "passport",
      component: () => import("@/page/passport"),
      redirect: { name: "login" }, // 添加重定向配置
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("@/page/passport/login"),
        },
        {
          path:'logon',
          name:'logon',
          component:()=>import("@/page/passport/logon")
        }
      ],
    },
    {
      path:"/:catchAll(.*)",
      name:"404",
      component:()=>import("@/page/404")
    },
  ],
});
