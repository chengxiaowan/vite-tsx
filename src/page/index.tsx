import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
  setup() {
    return () => {
      return (<div class="main-box">这里是首页</div>)
    };
  },
});
