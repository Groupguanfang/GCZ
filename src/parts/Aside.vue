<script>
export default {
  props:['theme'],
  data() {
    return {
      showLogin: true,
      showMain: false,
      defaultKey: ['1'],
      key: ['1']
    }
  },
  mounted() {
    if (localStorage.getItem('cookie') === null) {
      this.showLogin = true
      this.showMain = false
      this.defaultKey[0] = '0'
    } else {
      this.showLogin = false
      this.showMain = true
      this.defaultKey[0] = '1'
    }
  },
  methods: {
    switchKey(key) {
      this.key = key
    }
  },
  watch: {
    $route(to) {
      if (to.path === '/dashboard') {
        this.key[0] = '1'
      }
    }
  }
}
</script>

<template>
    <a-menu
        :default-selected-keys="defaultKey"
        :theme="theme"
        :selected-keys="key"
    >
      <router-link to="/" v-if="showLogin">
        <a-menu-item key="0">
          <icon-user />
          登录
        </a-menu-item>
      </router-link>
      <router-link to="/dashboard" @click="switchKey(['1'])" v-if="showMain">
        <a-menu-item key="1">
          <icon-home />
          仪表盘
        </a-menu-item>
      </router-link>
      <router-link to="/update" @click="switchKey(['2'])" v-if="showMain">
        <a-menu-item key="2">
          <icon-refresh />
          更新
        </a-menu-item>
      </router-link>
      <router-link to="/themes" @click="switchKey(['3'])" v-if="showMain">
        <a-menu-item key="3">
          <icon-codepen />
          主题
        </a-menu-item>
      </router-link>
      <router-link to="/plugins" @click="switchKey(['4'])" v-if="showMain">
        <a-menu-item key="4">
          <icon-code />
          插件
        </a-menu-item>
      </router-link>
      <router-link to="/settings" @click="switchKey(['5'])" v-if="showMain">
        <a-menu-item key="5">
          <icon-settings />
          设置
        </a-menu-item>
      </router-link>
    </a-menu>
</template>