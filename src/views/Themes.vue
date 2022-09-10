<script>
export default {
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    try {
      let res = await this.$axios.get('/wp-json/wp/v2/themes')
      this.data = res.data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    active(key) {
      this.$message.info('暂不支持在此切换主题')
    }
  }
}
</script>

<template>
  <div class="theme container">
    <a-space direction="vertical">
      <a-typography>
        <a-typography-title>
          主题
        </a-typography-title>
      </a-typography>
      <a-card
          v-for="(item,index) in data"
          :key="index"
          :title="item.template"
      >
        <template #cover>
          <img :src="item.screenshot" />
        </template>
        <template #extra>
          <a-link
              @click="active(index)"
              v-if="item.status === 'inactive'"
          >
            启用
          </a-link>

          <a-link v-else @click="active(index)">
            停用
          </a-link>
        </template>
        {{ item.description.raw }}
      </a-card>
    </a-space>
  </div>
</template>