import { defineComponent, h } from "vue";
import { ElEmpty, ElButton } from "element-plus";
import { useRouter } from "@/hooks/common.hooks";
import "./index.less";

export default defineComponent({
  name: "not found!",
  setup() {
    const { navigateTo } = useRouter();
    const description: string = "页面走丢了，哭哭~";

    return () => (
      <div id="notFound">
        <div class="main-box">
          <ElEmpty description={description} />
          <div class="backBtn">
            {h(
              ElButton,
              { onClick: () => navigateTo("/"), type: "primary" },
              () => "返回首页"
            )}
          </div>
        </div>
      </div>
    );
  },
});
