<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
  watch: {
    "$route.query.locale": function (val) {
      this.locale = val === "enUS" ? enUS : zhCN;
    },
  },
};
</script>

<style lang="less"></style>
