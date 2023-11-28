import { defineComponent, Transition, VNode, h } from "vue";
import { RouterView } from "vue-router";
import { useRouter } from "@/hooks/common.hooks";
import { ElButton } from "element-plus";
import "./index.less";
import "animate.css"; // 引入animate.css

export default defineComponent({
  name: "Passport",
  setup() {
    console.log((typeof(import.meta.env.VITE_ISDEV)));
    const { navigateTo } = useRouter();
    const testDom = (
      <div class="test-btn-box">
        {h(
          ElButton,
          { onClick: () => navigateTo("/passport/login"), type: "primary" },
          () => "跳转到登录"
        )}
        {h(
          ElButton,
          { onClick: () => navigateTo("/passport/logon"), type: "primary" },
          () => "跳转到注册"
        )}
      </div>
    );

    return () => (
      <div id="passport">
        <div class="content-box">
          <RouterView
            v-slots={{
              default: ({ Component }: { Component: VNode }) => {
                return h(
                  Transition,
                  {
                    enterActiveClass:
                      "animate__animated animate__rotateInDownLeft",
                    leaveActiveClass:
                      "animate__animated animate__rotateOutDownLeft",
                    mode: "out-in",
                  },
                  () => Component
                );
              },
            }}
          />
        </div>
        {
          import.meta.env.VITE_ISDEV === "true" ? testDom : null
        }
      </div>
    );
  },
});
