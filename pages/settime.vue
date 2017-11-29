<template>
  <div style="text-align: center">
    <div style="width: 80%; margin: 20px auto">
      <el-input type="number" v-model="time" placeholder="设置倒计时时间" style="margin-bottom: 20px;"></el-input>
      <el-select v-model="unit">
        <el-option label="分" value="min">分</el-option>
        <el-option label="秒" value="sec">秒</el-option>
      </el-select>

      <el-button type="primary" size="large" style="width: 60%; margin-top: 50px;" @click="settime">开始倒计时</el-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      time: '',
      unit: '',
    }
  },
  methods: {
    settime() {
      if (this.time === 0) {
        Toast({
          message: '设置时间不应为0',
          position: 'middle',
          duration: 3000
        })
        return
      } else if (this.unit === '') {
        Toast({
          message: '请设置时间单位',
          position: 'middle',
          duration: 3000
        })
        return
      }

      let timer = 0
      if (this.unit === 'min') {
        timer = this.time * 1000 * 60
      } else if (this.unit === 'sec') {
        timer = this.time * 1000
      }

      this.$store.commit('game/setTime', { timer, })
      this.$router.back(-1)
    },
  }
}
</script>
