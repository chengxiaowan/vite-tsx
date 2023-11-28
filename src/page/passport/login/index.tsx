import { defineComponent, ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import "./index.less";

export default defineComponent({
  name: "Login",
  setup() {
    const showClose = ref<boolean>(false);

    return () => (
      <div id="login" class={showClose.value ? "active" : ""}>
        <div class="system-title">测试系统</div>
        <div class="form-box">
          <ElForm>
            <ElFormItem>
              <ElInput placeholder="请输入用户名" />
            </ElFormItem>
            <ElFormItem>
              <ElInput
                onBlur={() => (showClose.value = false)}
                onFocus={() => (showClose.value = true)}
                placeholder="请输入密码"
              />
            </ElFormItem>
          </ElForm>
          <div class="btn-box">
            <ElButton type="primary">登录</ElButton>
            <ElButton type="default">注册</ElButton>
          </div>
        </div>
      </div>
    );
  },
});
