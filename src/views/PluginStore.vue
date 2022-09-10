<script>
export default {
  async mounted() {
    let res = await this.$axios.get('https://wordpress.org/plugins/wp-json/plugins/v1')
    console.log(res)
  }
}
</script>

<template>
  <div class="pluginStore container">
    <a-typography-title>
      插件市场
      <a-button
          type="primary"
          size="small"
          @click="$router.push('/plugins')"
      >
        返回插件列表
      </a-button>
    </a-typography-title>
  </div>
</template>