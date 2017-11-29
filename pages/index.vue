<template>
  <div>
    <nuxt-link to="list/game" class="mint-cell">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title">
          <span class="mint-cell-text"></span>
        </div>
        <div class="mint-cell-value is-link">
          <span>逐梦演艺圈</span>
        </div>
      </div>
      <i class="mint-cell-allow-right"></i>
    </nuxt-link>

    <a class="mint-cell">
      <div class="mint-cell-wrapper"></div>
    </a>

    <div style="position: absolute; bottom: 60px; width: 100%; text-align: center">
      made by <b>爱桌游</b>
    </div>
    <tabbar now="剧本列表"></tabbar>
  </div>
</template>

<script>
import mixin from '~/mixins/common'

export default {
  mixins: [mixin],
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
