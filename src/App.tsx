import { KeepAlive, defineComponent, VNode } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <RouterView
        v-slots={{
          default: ({ Component }: { Component: VNode }) => {
            return <KeepAlive>{Component}</KeepAlive>;
          },
        }}
      />
    );
  },
});
