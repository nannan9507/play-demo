<template>
  <div style="text-align: center">
    <div style="width: 80%; margin: 20px auto">
      <el-input v-model="name" placeholder="设置玩家名" style="margin-bottom: 20px;"></el-input>
      <el-button type="primary" size="large" style="width: 60%" @click="setname">保存玩家</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    if (!this.$route.query.roleName) {
      this.$router.back(-1)
    }
  },
  methods: {
    setname() {
      this.$store.commit('game/setName', { roleName: this.$route.query.roleName, name: this.name })
      this.$router.back(-1)
    },
  }
}
</script>
