<script>
export default {
  data() {
    return {
      columns: [
        {
          title: '插件名称',
          dataIndex: 'name'
        },
        {
          title: '插件描述',
          dataIndex: 'description.raw'
        },
        {
          title: '作者',
          dataIndex: 'author'
        },
        {
          title: '状态',
          width: 90,
          fixed: 'right',
          dataIndex: 'status'
        }
      ],
      data:[],
      loading: true
    }
  },
  methods: {
    activePlugin() {
    }
  },
  async mounted() {
    try {
      let plu = await this.$axios.get('/wp-json/wp/v2/plugins')
      let dat = plu.data
      for (let i = 0;i < plu.data.length;i++) {
        if (plu.data[i].status === 'active') {
          dat[i].status = '已启用'
        } else {
          dat[i].status = '已禁用'
        }
      }
      console.log(dat)
      this.data = dat
      this.loading = false
    } catch (error) {
      this.$message.error('网络错误或登录状态失效')
    }
  }
}
</script>

<template>
  <div class="plugins container">
    <a-typography>
      <a-typography-title>
        插件
        <a-button
            type="primary"
            size="small"
            @click="$router.push('/plugin-store')"
        >
          安装插件
        </a-button>
      </a-typography-title>
    </a-typography>
    <a-table
        :columns="columns"
        :data="data"
        :scroll="{ x: 1000 }"
        :stripe="true"
        :loading="loading"
    />
  </div>
</template>