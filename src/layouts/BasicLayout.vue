<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === $NAV.LAYOUT.LEFT"
        v-model="collapsed"
        :theme="navTheme"
        :trigger="null"
        collapsible
      >
        <div class="logo">Ant Design Vue Pro</div>
        <SiderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            v-auth="['admin']"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Header />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
import SettingDrawer from "../components/SettingDrawer";

export default {
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    // 网站整体风格
    navTheme() {
      return this.$route.query[this.$NAV.THEME.NAME] || this.$NAV.THEME.DARK;
    },
    // 导航模式
    navLayout() {
      return this.$route.query[this.$NAV.LAYOUT.NAME] || this.$NAV.LAYOUT.LEFT;
    },
  },
};
</script>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
  margin: 16px;
}
.nav-theme-dark >>> .logo {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
</style>
