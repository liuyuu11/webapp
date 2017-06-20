<template>
  <el-form :model="loginForm"  :rules="loginRules" ref="loginForm"  class="login-container">
    <h3 class="title">某猫OA系统</h3>
    <el-form-item prop="userName">
      <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="userPassword">
      <el-input type="password" v-model="loginForm.userPassword" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="loginClick" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        logining: false,
        loginForm: {
          userName: '',
          userPassword: ''
        },
        loginRules: {
          userName: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          userPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      loginClick(ev) {
        var _this = this;
        console.log(this);
        console.log(ev);
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = { 'userName': this.loginForm.userName, 'userPassword': this.loginForm.userPassword };
            this.$http.post('/admin/login',loginParams).then(function(res){
              console.log(res);
              if(res.data.success){
                 _this.$router.push('/hello');
              }else{
                alert(res.data.msg);
              }
            }).catch(function(rej){
              console.log(rej);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>