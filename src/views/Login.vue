<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginAction() {
      try {
      let data =
          await this.$axios.post('/wp-json/jwt-auth/v1/token',{
            username: this.username,
            password: this.password
          })
      console.log(data)
      this.$message.success('登录成功')
      localStorage.setItem('cookie',data.data.token)
      location.reload()
      } catch (error) {
        console.log(error)
        this.$message.info('登录错误,请检查网络和用户名和密码是否正确')
      }
    }
  }
}
</script>

<template>
  <div class="login container">
    <a-form>
      <a-space direction="vertical">
        <a-input v-model="username" placeholder="用户名或电子邮箱地址" />
        <a-input type="password" v-model="password" placeholder="密码" />
        <a-button @click="loginAction()" type="primary">登录</a-button>
      </a-space>
    </a-form>
  </div>
</template>

<style scoped>

</style>