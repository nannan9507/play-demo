<template>
  <div class="container">
    <h3>
      {{ isLogin ? '登录' : '注册' }}
      <span class="toggle-btn">
        <a href="javascript:;" @click="toggle(isLogin)">切换</a>
      </span>
    </h3>

    <el-form ref="loginForm" :model="loginForm" label-width="80px" v-if="isLogin">
      <el-form-item v-if="showError">
        <span style="color: red;">账号／密码错误，登录失败</span>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input type="number" v-model="loginForm.loginName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password" @change="showError = false"></el-input>
      </el-form-item>
    </el-form>

    <el-form ref="regiForm" :rules="rules" :model="regiForm" label-width="80px" v-if="!isLogin">
      <el-form-item label="手机号" prop="mobile">
        <el-input type="number" v-model="regiForm.mobile" :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="regiForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="regiForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证密码">
        <el-input type="password" v-model="regiForm.repass"></el-input>
      </el-form-item>
      <el-form-item label="店名" prop="name">
        <el-input v-model="regiForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="regiForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址">
        <el-input v-model="regiForm.address"></el-input>
      </el-form-item>
    </el-form>

    <div style="color: red; text-align: center;">{{ errorMsg }}</div>

    <div class="button-field">
      <el-button type="primary" @click="onSubmit(isLogin)">{{ isLogin ? '登录' : '注册' }}</el-button>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import mixin from '~/mixins/common'
import { setToken } from '~/utils/auth'

export default {
  mixins: [mixin],
  data() {
    return {
      rules: {
        mobile: [
          { required: true, message: '请输入手机号作为登录账号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11位数字', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入商户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度至少为6位', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' },
        ],
      },
      errorMsg: '',
      isLogin: false,
      showError: false,
      loginForm: {
        loginName: '',
        password: '',
      },
      regiForm: {
        mobile: '',
        username: '',
        password: '',
        repass: '',
        name: '',
        tel: '',
        address: '',
      },
    }
  },
  methods: {
    // 切换
    toggle(isLogin) {
      this.isLogin = !this.isLogin
      let form = isLogin ? 'loginForm' : 'regiForm'

      Object.keys(this[form]).forEach(key => {
        this[form][key] = ''
      })
    },
    // 提交按钮
    onSubmit(isLogin) {
      let form = isLogin ? 'loginForm' : 'regiForm'
      let url = isLogin ? '/login/site' : '/reg/shop/email'

      if (form === 'regiForm') {
        let pass = true
        this.$refs['regiForm'].validate((valid) => {
          if (!valid) {
            pass = false
            return false
          }
        })

        if (!pass) {
          return
        }
      }

      if (form === 'regiForm' && (this.regiForm.password !== this.regiForm.repass)) {
        this.regiForm.password = ''
        this.regiForm.repass = ''
        this.errorMsg = '两次密码输入不一致，请重新输入'
        return
      }

      let data = Object.assign({}, this[form], {
        password: md5(this[form].password),
      })

      this.http.post(url, data).then(resp => {
        this.$router.push({ name: 'index' })
        setToken(resp.member.token)
      }).catch((res) => {
        this.errorMsg = res.errorMsg
        if (isLogin) {
          this[form].password = ''
          this.showError = true
        }
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
.container {
  .el-form {
    margin: 20px auto 0
    width: 90%
    max-width: 500px
  }

  .button-field {
    margin-top: 20px
    text-align: center
    .el-button {
      width: 90%
      max-width: 500px
    }
  }
}
h3 {
  background: #F5F5F5
  position: relative
  font-size: 28px
  text-align: center
  .toggle-btn {
    position: absolute
    right: 0
    margin-right: 10px
    font-size: 14px
    line-height: 40px
    a {
      color: #009ce5
      text-decoration: none
    }
  }
}
</style>
