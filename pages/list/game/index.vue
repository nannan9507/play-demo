<template>
  <div>
    <flex-layout :options="{ nav: true }">
      <div slot="app-header">
        <mt-header :title="$store.state.game.title">
          <router-link to="/" slot="left" v-if="!gameStart">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>

        <mt-navbar v-model="selected">
          <mt-tab-item id="info" v-if="!gameStart">信息</mt-tab-item>
          <mt-tab-item id="game" v-if="gameStart">主持流程</mt-tab-item>
          <mt-tab-item id="role" v-if="gameStart">角色</mt-tab-item>
          <mt-tab-item id="tool" v-if="gameStart">道具池</mt-tab-item>
          <mt-tab-item id="record" v-if="gameStart">记录</mt-tab-item>
          <mt-tab-item id="tool-out-game" v-if="gameStart">工具</mt-tab-item>
        </mt-navbar>
      </div>

      <div slot="app-body">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="info">
            <div class="__container" style="text-align: center">
              <div class="pic">
                <!--~/assets/image/${$store.state.game.icon}-->
                <img src="/image/logo.jpg" style="width: 300px; height: 300px;" />
                <h2>评分：{{ $store.state.game.rate }}</h2>
              </div>
              <div style="width: 100%;margin-top: 150px;">
                <div class="flex-middle">
                  <mt-button type="primary" size="large" @click="playing">开始剧本</mt-button>
                </div>
              </div>
            </div>
          </mt-tab-container-item>

          <!--主持流程-->
          <mt-tab-container-item id="game">
            <div class="__container">
              <el-steps :space="100" direction="vertical" :active="activeStep" style="float: left; width: 150px">
                <el-step :key="item.title" :title="item.title" v-for="(item, gameIndex) in $store.state.game.steps" @click.native="changeIndex(gameIndex)"></el-step>
              </el-steps>
              <div class="text-field" v-html="$store.state.game.steps[activeStep - 1].text"></div>
            </div>
          </mt-tab-container-item>

          <!--角色-->
          <mt-tab-container-item id="role">
            <div class="__container">
              <el-card v-for="(role, index) in $store.state.game.roles" :key="role.id" :body-style="{ padding: '0px' }">
                <img :src="`/image/${role.pic}`" class="image" />
                <div class="action" style="padding: 14px;">
                  <p>
                    <span>{{ role.roleName }}</span>
                    <span class="role__user" v-if="role.name">{{ role.name }}</span>
                    <mt-button style="margin-left: 10px" size="small" v-if="!role.name" @click="setName(role)">设置用户</mt-button>
                  </p>
                  <div class="bottom clearfix">
                    <div>
                      技能：<br/>
                      <span class="skill" :class="{'skill-disabled': !skill.status}" v-for="skill in role.skills" @click="useSkill(role, skill)">{{ skill.name }}</span>
                    </div>
                    <div style="height: 60px; margin-top: 20px">
                      道具：<br/>
                      <span class="skill" v-for="(tool, index) in role.tools" @click="openToolPage(tool, role, 'toOther')">{{ index + 1 }}. {{ tool.name }}</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
          </mt-tab-container-item>

          <!--道具池-->
          <mt-tab-container-item id="tool">
            <div class="__container">
              <div class="search-box">
                <el-input
                  placeholder="道具筛选"
                  icon="search"
                  v-model="toolSearch"
                  @change="filterTools">
                </el-input>

                <el-button type="primary" @click="searchClear">清空</el-button>
              </div>

              <el-card v-for="(tool, index) in toolslist" :key="tool.id" :body-style="{ padding: '0px' }">
                <!--<img src="~/assets/image/hamburger.png" class="image" />-->
                <div class="action" style="padding: 14px;">
                  <p style="font-size: 18px">{{ tool.name }}</p>
                  <div class="bottom clearfix">
                    <a class="skill" href="javascript:;" @click="openToolPage(tool, null, 'toMe')">给予物品</a>
                  </div>
                </div>
              </el-card>
            </div>

          </mt-tab-container-item>

          <!--记录-->
          <mt-tab-container-item id="record">
            <div class="__container" style="text-align: center">
              <textarea class="textarea" placeholder="备忘录" v-model="textarea"></textarea>
              <div style="text-align: left; height: 320px; overflow: auto;">
                <template v-for="(log, index) in $store.state.game.log">
                  <p>{{ log }} <span v-if="index === 0">(最新)</span></p>
                </template>
              </div>
            </div>
          </mt-tab-container-item>

          <!--工具-->
          <mt-tab-container-item id="tool-out-game">
            <div class="el-card" v-if="this.timer" style="width: 100%; height: 50px; margin-top: 10px; line-height: 50px; padding: 0 20px">
              倒计时：{{ calcTimer }}
            </div>
            <div class="__container tool-out-game">
              <div class="el-card" v-if="!timer">
                <nuxt-link :to="{ name: 'settime' }">
                  <i class="el-icon-time" style="font-size: 30px"></i>
                  <p>倒计时</p>
                </nuxt-link>
              </div>
              <div class="el-card" v-if="timer">
                <a href="javascript:;" @click="stopTimer">
                  <i class="el-icon-time" style="font-size: 30px"></i>
                  <p>停止倒计时</p>
                </a>
              </div>
              <div class="el-card">
                <a href="javascript:;" @click="endGame">
                  <i class="el-icon-delete2" style="font-size: 30px"></i>
                  <p>结束剧本</p>
                </a>
              </div>
            </div>
          </mt-tab-container-item>

        </mt-tab-container>

        <!--设置全屏分配道具-->
        <mt-popup v-model="popupVisible">
          <div style="width: 300px; height: 350px; overflow: auto;">
            <div style="text-align: center" v-if="tool">
              <h3>{{ tool.name }}</h3>
            </div>
            <mt-checklist
              title=""
              v-model="valuelist"
              :options="rolelist" v-if="type === 'toMe'">
            </mt-checklist>

            <mt-checklist
              title=""
              v-model="valuelist"
              :options="rolelist" v-if="type === 'toOther'">
            </mt-checklist>

          </div>
          <div>
            <el-button type="primary" style="width: 100%;" @click="giveToolToUser" v-if="type === 'toMe'">分配</el-button>
            <el-button type="primary" style="width: 100%;" @click="giveToolToOtherUser" v-if="type === 'toOther'">给予</el-button>
          </div>
        </mt-popup>
      </div>
    </flex-layout>
  </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
import mixin from '~/mixins/common'

export default {
  mixins: [mixin],
  data() {
    return {
      timer: 0,
      gameStart: false,
      rolelist: [],
      toolSearch: '',
      toolslist: [],
      activeStep: 1,
      selected: 'info',
      popupVisible: false,
      valuelist: [],
      tool: null,
      role: null,
      type: '',
      timeFunc: null,
      textarea: '',
    }
  },
  watch: {
    popupVisible (newVal) {
      if (!newVal) {
        this.resetPopover()
      }
    }
  },
  mounted() {
    this.http.get('/store/search').then(res => {
      console.log(res)
    }).catch(resp => {
      if (resp.errorCode === 'COMMON-000001') {
        this.$router.push('/login')
      }
    })
    if (this.$route.query.tab) {
      this.gameStart = true
      this.selected = this.$route.query.tab
    }

    this.toolslist = this.$store.state.game.tools

    if (this.$store.state.game.timer) {
      this.timer = this.$store.state.game.timer
      this.timeFunc = setInterval(() => {
        this.timer = this.timer - 1 * 1000
        if (!this.timer) {
          Toast({
            message: '时间到！',
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2000
          })
          this.$store.commit('game/setTime', { timer: 0, })
          clearInterval(this.timeFunc)
        }
      }, 1000)
    }
    this.resetPopover()
  },
  computed: {
    calcTimer() {
      const totalSec = this.timer / 1000
      let min = parseInt(totalSec / 60)
      let sec = parseInt(totalSec % 60)
      if (min < 10) {
        min = `0${min}`
      }
      if (sec < 10) {
        sec = `0${sec}`
      }
      return `${min} : ${sec}`
    },
  },
  methods: {
    playing() {
      this.gameStart = true
      this.selected = 'game'
      this.$router.push({ name: 'list-game', query: { tab: this.selected } })
    },
    setRoleList() {
      this.rolelist = []
      for (let role of this.$store.state.game.roles) {
        this.rolelist.push({
          label: role.roleName,
          value: role.roleName,
        })
      }
    },
    useSkill(role, skill) {
      if (!skill.status) {
        MessageBox({
          title: '提示',
          message: '为防止误操作，技能是否重新打开？',
          showCancelButton: true
        }).then(action => {
          if (action === 'confirm') {
            this.$store.commit('game/usedSkill', skill)
            this.$store.commit('game/addLog', { txt: `重置【${role.roleName}】技能【${skill.name}】` })
          }
        })
      } else {
        this.$store.commit('game/usedSkill', skill)
        this.$store.commit('game/addLog', { txt: `【${role.roleName}】使用技能【${skill.name}】` })
      }
    },
    openToolPage(tool, role, type) {
      this.tool = tool
      this.role = role
      if (role) {
        let index = -1
        for (let i = 0; i < this.rolelist.length; i++) {
          if (this.rolelist[i].value === role.roleName) {
            index = i
          }
        }

        if (index > -1) {
          this.rolelist.splice(index, 1)
        }

        if (!this.rolelist.length) {
          return
        }
      }
      this.popupVisible = true
      this.type = type
    },
    resetPopover() {
      this.popupVisible = false
      setTimeout(() => {
        this.setRoleList()
        this.tool = null
        this.role = null
        this.type = ''
        this.valuelist = []
      }, 500)
    },
    giveToolToUser() {
      for (let roleName of this.valuelist) {
        this.$store.commit('game/giveToolToUser', { roleName, tool: this.tool, })
        this.$store.commit('game/addLog', { txt: `道具【${this.tool.name}】给【${roleName}】` })
      }
      this.resetPopover()
    },
    giveToolToOtherUser() {
      this.$store.commit('game/giveToolToOther', { me: this.role.roleName, you: this.valuelist[0], tool: this.tool, })
      this.$store.commit('game/addLog', { txt: `转移【${this.role.roleName}】道具【${this.tool.name}】给【${this.valuelist[0]}】` })
      this.resetPopover()
    },
    setName(role) {
      this.$router.push({ name: 'setname', query: { roleName: role.roleName } })
    },
    changeIndex(index) {
      this.activeStep = index + 1
    },
    filterTools(txt) {
      const array = this.$store.state.game.tools.filter((obj) => {
        return obj.name.indexOf(txt) > -1
      })
      this.toolslist = array || this.$store.state.game.tools
    },
    stopTimer() {
      this.timer = 0
      this.$store.commit('game/resetGame', 0)
      if (this.timeFunc) {
        clearInterval(this.timeFunc)
      }
    },
    searchClear() {
      this.toolSearch = ''
      this.filterTools(this.toolSearch)
    },
    endGame() {
      MessageBox({
        title: '提示',
        message: '结束剧本，一切数据重置，是否确认结束？',
        showCancelButton: true
      }).then(action => {
        if (action === 'confirm') {
          this.stopTimer()
          this.$store.commit('game/resetGame')
          this.$router.push({ name: 'index' })
        }
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
.search-box {
  display: flex
  margin-bottom: 10px
}
.tool-out-game {
  display: flex
  justify-content: center
  .el-card {
    width: 50%
    height: 100px
    a {
      display: block
      width: 100%
      height: 100%
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      p {
        margin-top: 10px
        font-size: 12px!important
        font-weight: 400!important
      }
    }
  }
}
.text-field {
  width: calc(100% - 150px)
  position: fixed
  right: 0
  height: 100%
  overflow: auto
}
.flex-middle {
  display: flex
  justify-content: center
}
.skill {
  margin-right: 10px
  color: #009ce5
}
.textarea {
  margin-bottom: 10px
  width: 98%
  height: 300px
  border: 1px solid #DEDEDE
  outline: none
  font-size: 20px
  resize: none
}
.__container {
  margin: 0 auto
  margin-top: 10px
  .el-card {
    float: left
    margin-left: 3.5px
    margin-bottom: 10px
    width: 48%
    p {
      text-align: center
      font-weight: bold
      font-size: 20px
    }
    img {
      width: 100%
      height: 150px
    }
    .skill-disabled {
      color: #F5F5F5
    }
    .role__user {
      margin-left: 10px
      color: #999
      font-size: 12px
    }
  }
  .bottom.clearfix {
    margin-top: 20px
  }
}
</style>
