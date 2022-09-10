<script>
export default {
  data() {
    return {
      collapsed: true,
      key: ['1']
    }
  },
  methods: {
    onCollapse() {
      this.collapsed = !this.collapsed
      this.$store.commit('collapsedAction')
      console.log(this.$store.state.menuCollapsed)
    }
  },
  mounted() {
    if (this.$route.path === '/dashboard') {
      this.key[0] = '1'
    } else {
      this.key[0] = '0'
    }
  },
  watch: {
    $route(to) {
      if (to.path === '/dashboard') {
        this.key[0] = '1'
      } else {
        this.key[0] = '0'
      }
    }
  }
}
</script>
<template>
  <div class="gcz-header">
    <a-menu
        theme="dark"
        mode="horizontal"
        :selected-keys="key"
    >
      <a-button class="col" shape="round" @click="onCollapse">
        <IconCaretLeft v-if="collapsed" />
        <IconCaretRight v-else />
      </a-button>

      <router-link to="/dashboard">
        <a-menu-item key="1">
          仪表盘
        </a-menu-item>
      </router-link>
    </a-menu>
  </div>
</template>

<style scoped>
.col {
  margin-right: 10px;
}
</style>