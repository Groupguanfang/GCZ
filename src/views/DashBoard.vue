<script>
import Statistic from "../parts/DashBoard/Statistic.vue";
export default {
  components: {Statistic},
  async mounted() {
    let user = await this.$axios({
        url: '/wp-json/wp/v2/users/me',
    })
  }
}
</script>

<template>
  <div class="dashboard">
    <Statistic></Statistic>
  </div>
</template>