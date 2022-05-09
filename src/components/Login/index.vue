<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">登录</h1>
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入账号" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" type="password"
          ></el-input>
        </el-form-item>
        <!-- 记住密码 -->
        <el-checkbox v-model="loginForm.remember" class="rememberBox" @change="rememberFn">记住密码</el-checkbox>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="register-box" @click="registerSrc">
          <el-link type="primary">没有账号？</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    const validUsername = (rule, value, callback) => {
      // const reg = /[0-9]+$/
      if (!value) {
        return callback(new Error('账号不能为空'))
      } 
      // else {
      //   if (!reg.test(value)) {
      //     callback(new Error('账号必须是纯数字'))
      //   } else {
      //     callback()
      //   }
      // }
    }
    const validPassword = (rule, value, callback) => {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)/
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        if (!reg.test(value)) {
          callback(new Error('密码必须是由字母+数字组合'))
        } else {
          callback()
        }
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        remember: ''
      },
      loginFormRules: {
        username: [
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          },
          {
            validator: validUsername,
            trigger: 'blur'
          }
        ],
        password: [
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur'
          },
          {
            validator: validPassword,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted (){
    // 方法一：通过vuex
    //  this.$store.commit('getRemember')
    //  const rem = this.$store.state.user.remember
    //  console.log(rem)
    //  if(rem == "true") {
    //   this.loginForm.remember = true
    // }else {
    //     this.loginForm.remember = false
    // }

    // 方法二：通过cookie 直接获取

    // this.loginForm.remember = Boolean(Cookies.get('remember'))
    if(Cookies.get('remember') == "true") {
      this.loginForm.remember = true
    }else {
        this.loginForm.remember = false
    }
  },
  methods: {
    login () {
      if (this.loginForm.username === 'mnn' && this.loginForm.password === '123') {
        // localStorage.setItem('token', 'Bearer xxxx')
        let token = 124
        this.$store.commit('setToken',token)
        this.$router.push('/list')
        this.$message.success('登录成功！')
      } else {
        // localStorage.removeItem('token')
        this.$message.error('登录失败！')
      }
    },
    rememberFn(val){
        // 方法一：
        // this.$store.commit('setRemember',val)

        // 方法二：
        Cookies.set('remember',val)
    },
    registerSrc() {
        let token = 1256
        this.$store.commit('setToken',token)
        this.$router.push({name:"register"})
    }
  },
  computed:{
     getRm(){
       return this.$store.commit('getToken')
     }
  }
}
</script>

<style lang="less" scoped>
  .login-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: url(../../assets/login.jpg) center center no-repeat;
      background-size: cover;
      .login-title {
          width: 100%;
          text-align: center;
          margin: 0px auto 20px;
      }
      .register-box {
          position: absolute;
          bottom: 20px;
          right: 20px;
      }
      .login-box {
          width: 88%;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow: 2px 2px 4px rgba(0,0,0,.6);
          transform: translate(-50%,-50%);
          max-width: 550px;
          padding: 30px;
          box-sizing: border-box;
          border-radius: 5px;
          background: #fff;
          .btn {
              text-align: center;
              margin-top: 10px;
              button {
                  width: 120px;
              }
          }
      }
  }
</style>