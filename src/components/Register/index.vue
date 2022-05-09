<template>
    <div class="register-container">
        <div class="register-box">
            <h1 class="login-title">注册</h1>
            <el-form :model="userFrom"  :rules="rules" ref="userFrom" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username"  label-width="80px">
                    <el-input type="text" v-model="userFrom.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" label-width="80px">
                    <el-input type="password" v-model="userFrom.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary" @click="submitForm('userFrom')">提交</el-button>
                </el-form-item>
            </el-form>
            <div class="login-box" @click="loginSrc">
                <el-link type="primary">有账号,登录？</el-link>
            </div>
            
        </div>
    </div>
</template>

<script>
   export default {
       name:"Register",
       data() {
           return {
               userFrom: {
                   username: '',
                   password: '',
               },
               rules: {
                   username:[
                       { required: true, message: '请输入用户名', trigger: 'blur' },
                       { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                   ],
                   password:[
                       { required: true, message: '请输入密码', trigger: 'blur' },
                       { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                   ]
               }
           }
       },
       methods: {
            submitForm(userFrom) {
                this.$refs[userFrom].validate((valid) => {
                    if (valid) {
                        console.log(this.userFrom)
                        this.$message({
                            message: '注册成功！',
                            type: 'success'
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            loginSrc() {
                this.$router.push({path:"/"})
            }
       }
   }
</script>

<style lang="less" scoped>
    .register-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        // background: url(../../assets/login.jpg) center center no-repeat;
        background: #26a69a;
        background-size: cover;
        .register-box {
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
            .login-title {
                width: 100%;
                text-align: center;
                margin: 0px auto 20px;
            }
            .btn {
                text-align: center;
                margin-top: 10px;
                .el-form-item__content {
                    margin-left: 0!important;
                }
                button {
                    width: 120px;
                }
            }
            .login-box {
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
        }
    }
</style>