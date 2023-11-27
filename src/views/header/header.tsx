import { defineComponent } from "vue";
import "./header.less";

export default defineComponent({
  name: "Header",
  setup() {
    return () => {
      return <div class="header">这里是header</div>;
    };
  },
});
