<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item
        :id="tab.name"
        v-for="tab in $store.state.tabbar.tabslist"
        :key="tab.name"
        @click.native="jump(tab.path)">
        <div slot="icon" class="tab-box">
          <i class="el-icon-share"></i>
          <template v-if="tab.tips">{{ tab.tips }}</template>
        </div>
        {{ tab.name }}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    now: {
      type: String,
      default: '首页',
    },
  },
  data() {
    return {
      selected: this.now,
    }
  },
  methods: {
    jump(name) {
      this.$router.push({ name, })
    },
  }
}
</script>

<style lang="stylus" scoped>
.tab-box {
  border: 1px solid #eaeaea
  text-align: center
  line-height: 24px
  color: #26a2ff
}
</style>
