<script>
export default {
  data() {
    return {
      userCount: 0,
      postCount: 0,
      pageCount: 0,
      pluginsCount: 0,
      loading: true
    }
  },
  async mounted() {
    try {
      let post = await this.$axios.get('/wp-json/wp/v2/posts')
      let plugin = await this.$axios.get('/wp-json/wp/v2/plugins')
      let user = await this.$axios.get('/wp-json/wp/v2/users')
      let page = await this.$axios.get('/wp-json/wp/v2/pages')
      this.postCount = post.data.length
      this.pluginsCount = plugin.data.length
      this.userCount = user.data.length
      this.pageCount = page.data.length
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<template>
  <div class="static">
    <a-row class="row">
      <a-col :span="6" :xs="24" :sm="12" :md="6">
        <a-card :loading="loading">
          <a-statistic
              title="用户"
              :value="userCount"
              animation
          />
        </a-card>
      </a-col>
      <a-col :span="6" :xs="24" :sm="12" :md="6">
        <a-card :loading="loading">
          <a-statistic
              title="文章总数"
              :value="postCount"
              animation
          />
        </a-card>
      </a-col>
      <a-col :span="6" :xs="24" :sm="12" :md="6">
        <a-card :loading="loading">
          <a-statistic
              title="页面总数"
              :value="pageCount"
              animation
          />
        </a-card>
      </a-col>
      <a-col :span="6" :xs="24" :sm="12" :md="6">
        <a-card :loading="loading">
          <a-statistic
              title="插件总数"
              :value="pluginsCount"
              animation
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.row .arco-col {
  padding: 10px;
}
</style>