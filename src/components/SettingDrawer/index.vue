<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      width="300px"
      @close="onClose"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <h2>整体风格定制</h2>
      <a-radio-group
        :value="navTheme"
        @change="handelSettingChange($NAV.THEME.NAME, $event.target.value)"
      >
        <a-radio :value="$NAV.THEME.DARK"> 黑色 </a-radio>
        <a-radio :value="$NAV.THEME.LIGHT"> 白色 </a-radio>
      </a-radio-group>
      <h2>导航模式</h2>
      <a-radio-group
        :value="navLayout"
        @change="handelSettingChange($NAV.LAYOUT.NAME, $event.target.value)"
      >
        <a-radio :value="$NAV.LAYOUT.LEFT"> 左侧 </a-radio>
        <a-radio :value="$NAV.LAYOUT.RIGHT"> 右侧 </a-radio>
      </a-radio-group>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
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
  methods: {
    // 修改整体风格或导航模式
    handelSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },

    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 100%;
  width: 48px;
  height: 48px;
  line-height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 3px 0 0 3px;
}
</style>
