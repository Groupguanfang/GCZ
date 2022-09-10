<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      email: '',
      loading: true,
      buttonLoading: false,
    }
  },
  async mounted() {
    try {
      let settings = await this.$axios.get('/wp-json/wp/v2/settings')
      this.title = settings.data.title
      this.description = settings.data.description
      this.email = settings.data.email
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async saveAction() {
      this.buttonLoading = true
      try {
        let save = await this.$axios.post('/wp-json/wp/v2/settings',{
          title: this.title,
          description: this.description,
          email: this.email,
        })
        this.buttonLoading = false
        this.$message.success('保存成功')
      }catch (error) {
        this.buttonLoading = false
        this.$message.success('保存失败')
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class="settings container">
    <a-spin class="spin" :loading="loading" tip="正在加载中...">
      <a-typography>
        <a-typography-title>
          设置
        </a-typography-title>
      </a-typography>
      <a-form layout="vertical" :auto-label-width="true">
        <a-form-item field="title" label="站点名称">
          <a-input v-model="title"></a-input>
        </a-form-item>
        <a-form-item field="description" label="站点描述">
          <a-input v-model="description"></a-input>
        </a-form-item>
        <a-form-item field="email" label="邮箱">
          <a-input v-model="email"></a-input>
        </a-form-item>
      </a-form>
      <a-button @click="saveAction()" :loading="buttonLoading" type="primary">保存</a-button>
    </a-spin>
  </div>
</template>

<style scoped>
.spin {
  width: 100%
}
</style>