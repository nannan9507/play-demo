import tabbar from '~/components/tabbar.vue'
import flexLayout from '~/components/flex-layout'

export default {
  components: {
    flexLayout,
    tabbar,
  },
  methods: {
    initMescroll() {
      window.mescroll = new window.MeScroll('mescroll', {
        // 下拉刷新
        down: {
          auto: false,
          callback: this.downCallback,
        },
        // 上拉加载
        up: {
          callback: this.upCallback,
          mustToTop: false,
        },
      })
    },
    /**
     * 下拉刷新
     */
    downCallback() {
      // eslint-disable-next-line
      console.error('未设置下拉刷新事件, 方法名 downCallback')
      window.mescroll.endSuccess()
    },
    /**
     * 上拉加载
     */
    upCallback() {
      // eslint-disable-next-line
      console.error('未设置上拉加载事件, 方法名 downCallback')
    },
  },
}
